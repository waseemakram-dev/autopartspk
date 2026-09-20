# 🚀 Auto Parts AI Image Batch Processor

Is tool se aap client ki tamam 300+ raw / rough product images ko automated tareeqe se Gemini AI ke zariye clean, high-end studio background aur professional lighting wali e-commerce ready images mein convert kar sakte hain.

---

## 🛠️ Complete Setup & Usage Guide

### Step 1: Raw Images Upload Karein
Apni tamam 300 raw images (JPG, PNG, WEBP) ko is folder mein copy kar dein:
`d:\waseem desktop\clients\waliha\spare parts\images_gen\input_images\`

---

### Step 2: Automation Script Run Karein
Terminal ya CMD mein yeh command chalayein:

```bash
cd "d:\waseem desktop\clients\waliha\spare parts"
node images_gen/batch_process.js
```

---

### ⚡ Script Kaise Kaam Karti Hai?
1. **Auto-Scan:** Yeh `input_images` folder ki saari photos ek ek karke uthayegi.
2. **AI Image-to-Image Enhancement:** Gemini ko original photo bhejegi aur product ki shape/details ko unchanged rakhte hue background studio lighting wali bana degi.
3. **Rate Limit Handling:** Har image ke baad 5 second ka pause legi taake API limit na cross ho. Agar limit hit ho jaye to auto-retry karegi.
4. **Auto-Save:** Output clean images automated is folder mein save honge:
   `images_gen/output_images/`

---

## 📝 Manual Prompt (Gemini / ChatGPT Web ke liye)

Agar aap manual bhi kisi single image par web interface mein prompt try karna chahte hain, toh yeh prompt use karein:

```text
Professional e-commerce product photography of the exact auto spare part shown in the input image.

STRICT INSTRUCTIONS:
1. PRESERVE THE PRODUCT: Keep the exact shape, features, metallic/plastic texture, geometry, and details of the auto part in the reference photo. Do NOT modify, replace, or alter the part itself.
2. STUDIO BACKGROUND: Replace the messy/raw background with a clean, high-end, neutral studio background (soft off-white / light grey studio backdrop).
3. LIGHTING & SHADOWS: Add realistic, soft ambient studio lighting that highlights metallic edges and chrome finishes. Add a subtle, realistic drop shadow beneath the part.
4. QUALITY: Crisp 8k resolution, razor-sharp focus, professional commercial product shot ready for a website catalog.
```
