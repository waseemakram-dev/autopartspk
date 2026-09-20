import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories
const INPUT_DIR = path.join(__dirname, 'input_images');
const OUTPUT_DIR = path.join(__dirname, 'output_images');

// Ensure directories exist
if (!fs.existsSync(INPUT_DIR)) fs.mkdirSync(INPUT_DIR, { recursive: true });
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// API Key (Env or default)
const API_KEY = process.env.GEMINI_API_KEY || "AQ.Ab8RN6IAjp6mUn6o-6HYJgu2UAO_HE87TlKkIiO0FWcuMj02_A";
const MODEL = "gemini-2.5-flash-image"; // Gemini Image model

// Dedicated Product Photography Prompt for Spare Parts
const PRODUCT_PROMPT = `
Professional e-commerce product photography of the exact auto spare part shown in the input image.

STRICT INSTRUCTIONS:
1. PRESERVE THE PRODUCT: Keep the exact shape, features, metallic/plastic texture, geometry, and details of the auto part in the reference photo. Do NOT modify, replace, or alter the part itself.
2. STUDIO BACKGROUND: Replace the messy/raw background with a clean, high-end, neutral studio background (soft off-white / light grey studio backdrop).
3. LIGHTING & SHADOWS: Add realistic, soft ambient studio lighting that highlights metallic edges and chrome finishes. Add a subtle, realistic drop shadow beneath the part.
4. QUALITY: Crisp 8k resolution, razor-sharp focus, professional commercial product shot ready for a website catalog.
`.trim();

// Helper to get mime type
function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
  if (ext === '.png') return 'image/png';
  if (ext === '.webp') return 'image/webp';
  return 'image/jpeg';
}

// Sleep helper
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function processSingleImage(fileName, attempt = 1) {
  const inputPath = path.join(INPUT_DIR, fileName);
  const outputPath = path.join(OUTPUT_DIR, `clean_${path.parse(fileName).name}.png`);

  if (fs.existsSync(outputPath)) {
    console.log(`⏩ Skipping ${fileName} (Already processed in output_images)`);
    return true;
  }

  console.log(`\n📸 [Attempt ${attempt}] Processing: ${fileName}...`);
  const imageBuffer = fs.readFileSync(inputPath);
  const base64Data = imageBuffer.toString('base64');
  const mimeType = getMimeType(inputPath);

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                inlineData: {
                  mimeType: mimeType,
                  data: base64Data
                }
              },
              {
                text: PRODUCT_PROMPT
              }
            ]
          }
        ],
        generationConfig: {
          responseModalities: ["IMAGE"]
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 429) {
        console.warn(`⚠️ Rate limit (429) hit for ${fileName}. Waiting 15 seconds before retry...`);
        await sleep(15000);
        return processSingleImage(fileName, attempt + 1);
      }
      console.error(`❌ API Error for ${fileName}:`, data.error?.message || response.statusText);
      return false;
    }

    const candidates = data.candidates;
    if (candidates && candidates[0]?.content?.parts) {
      for (const part of candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          const outBuffer = Buffer.from(part.inlineData.data, 'base64');
          fs.writeFileSync(outputPath, outBuffer);
          console.log(`✅ SUCCESS! Saved clean image to: ${outputPath}`);
          return true;
        }
      }
    }

    console.warn(`⚠️ No image output returned for ${fileName}`);
    return false;
  } catch (err) {
    console.error(`❌ Error processing ${fileName}:`, err.message);
    if (attempt <= 3) {
      console.log(`Retrying ${fileName} in 5 seconds...`);
      await sleep(5000);
      return processSingleImage(fileName, attempt + 1);
    }
    return false;
  }
}

async function runBatchProcessing() {
  console.log("==================================================");
  console.log("🚀 Automated Gemini Batch Image Enhancer");
  console.log("==================================================");
  console.log(`📂 Input Folder: ${INPUT_DIR}`);
  console.log(`📂 Output Folder: ${OUTPUT_DIR}\n`);

  const files = fs.readdirSync(INPUT_DIR).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  });

  if (files.length === 0) {
    console.log("⚠️ No images found in input_images folder!");
    console.log(` 👉 Please copy all your raw product images (JPG/PNG) into:`);
    console.log(`    ${INPUT_DIR}`);
    console.log(` 👉 Then run: node images_gen/batch_process.js\n`);
    return;
  }

  console.log(`Found ${files.length} images to process.\n`);

  let successCount = 0;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    console.log(`--------------------------------------------------`);
    console.log(`[${i + 1}/${files.length}] Starting: ${file}`);
    
    const success = await processSingleImage(file);
    if (success) successCount++;

    // Wait 5 seconds between requests to avoid hitting rate limits (15 RPM = ~4 sec)
    if (i < files.length - 1) {
      console.log("⏳ Waiting 5s before next image (respecting rate limits)...");
      await sleep(5000);
    }
  }

  console.log("\n==================================================");
  console.log(`🎉 Batch Processing Complete!`);
  console.log(`Total Processed Successfully: ${successCount} / ${files.length}`);
  console.log(`📁 All Clean Images Saved In: ${OUTPUT_DIR}`);
  console.log("==================================================");
}

runBatchProcessing();
