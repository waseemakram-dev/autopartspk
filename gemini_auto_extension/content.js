console.log("Gemini Auto Batch Extension Content Script Loaded.");

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "START_BATCH") {
    sendResponse({ status: "STARTED" });
    runBatchProcess(request.files, request.prompt, request.delaySeconds);
  }
  return true;
});

function updateStatus(text) {
  console.log("[Gemini Batcher]:", text);
  chrome.runtime.sendMessage({ action: "STATUS_UPDATE", text: text }).catch(() => {});
}

async function runBatchProcess(files, promptText, delaySeconds) {
  updateStatus(`Starting batch of ${files.length} images...`);

  for (let i = 0; i < files.length; i++) {
    const fileItem = files[i];
    updateStatus(`[${i + 1}/${files.length}] Processing: ${fileItem.name}...`);

    try {
      // 1. Convert DataURL back to File
      const blob = await (await fetch(fileItem.dataUrl)).blob();
      const file = new File([blob], fileItem.name, { type: blob.type || 'image/png' });

      // 2. Find file upload input
      let fileInput = document.querySelector('input[type="file"]');
      
      // If file input not found directly, click the '+' / add attachment button first
      if (!fileInput) {
        const attachBtn = document.querySelector('button[aria-label*="Upload"]') || 
                          document.querySelector('button[aria-label*="Add"]') ||
                          document.querySelector('button[aria-label*="image"]') ||
                          document.querySelector('button[aria-label*="file"]');
        if (attachBtn) {
          attachBtn.click();
          await sleep(1000);
          fileInput = document.querySelector('input[type="file"]');
        }
      }

      if (!fileInput) {
        updateStatus(`❌ Could not find file upload input on Gemini tab. Please open Gemini chat.`);
        return;
      }

      // Attach file to input via DataTransfer
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileInput.files = dataTransfer.files;
      fileInput.dispatchEvent(new Event('change', { bubbles: true }));

      updateStatus(`[${i + 1}/${files.length}] Image attached. Waiting 3s for preview upload...`);
      await sleep(3500);

      // 3. Find prompt input box
      const editor = document.querySelector('div[contenteditable="true"]') || 
                     document.querySelector('.ql-editor') || 
                     document.querySelector('textarea');

      if (!editor) {
        updateStatus(`❌ Could not find prompt input box on Gemini.`);
        return;
      }

      // Insert prompt text
      editor.focus();
      if (editor.tagName.toLowerCase() === 'textarea') {
        editor.value = promptText;
        editor.dispatchEvent(new Event('input', { bubbles: true }));
      } else {
        editor.innerText = promptText;
        editor.dispatchEvent(new InputEvent('input', { bubbles: true }));
      }

      await sleep(1500);

      // 4. Click Send Button
      const sendBtn = document.querySelector('button[aria-label*="Send"]') || 
                      document.querySelector('button[aria-label*="send"]') ||
                      document.querySelector('button[aria-label*="Bhejne"]') ||
                      document.querySelector('button.send-button');

      if (sendBtn && !sendBtn.disabled) {
        sendBtn.click();
      } else {
        // Press Enter key as fallback
        editor.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
      }

      updateStatus(`[${i + 1}/${files.length}] Sent prompt. Waiting for Gemini to generate...`);

      // 5. Wait for generation to finish
      await waitForGenerationComplete();

      // 6. Download generated image
      updateStatus(`[${i + 1}/${files.length}] Downloading generated image...`);
      await downloadLatestGeneratedImage(`clean_${fileItem.name}`);

      updateStatus(`[${i + 1}/${files.length}] Finished ${fileItem.name}! Waiting ${delaySeconds}s for next image...`);
      await sleep(delaySeconds * 1000);

    } catch (err) {
      updateStatus(`❌ Error on ${fileItem.name}: ${err.message}`);
      await sleep(5000);
    }
  }

  updateStatus(`🎉 All ${files.length} images processed successfully!`);
}

// Wait until Gemini stops generating
async function waitForGenerationComplete() {
  await sleep(12000); // Give initial 12 seconds for generation start

  let isGenerating = true;
  let checks = 0;

  while (isGenerating && checks < 60) {
    const stopBtn = document.querySelector('button[aria-label*="Stop"]') || 
                    document.querySelector('button[aria-label*="stop"]');
    
    if (!stopBtn) {
      isGenerating = false;
    } else {
      await sleep(3000);
      checks++;
    }
  }
}

// Download image from recent response
async function downloadLatestGeneratedImage(suggestedName) {
  const allImages = Array.from(document.querySelectorAll('img')).filter(img => {
    return img.src && (img.src.startsWith('data:image') || img.src.includes('googleusercontent') || img.src.includes('generativelanguage'));
  });

  if (allImages.length > 0) {
    const latestImg = allImages[allImages.length - 1];
    const src = latestImg.src;

    const a = document.createElement('a');
    a.href = src;
    a.download = suggestedName.replace(/\.[^/.]+$/, "") + ".png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
