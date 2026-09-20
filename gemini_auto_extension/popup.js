document.getElementById('imageInput').addEventListener('change', (e) => {
  const count = e.target.files.length;
  document.getElementById('fileCount').innerText = `${count} image(s) selected.`;
});

document.getElementById('startBtn').addEventListener('click', async () => {
  const fileInput = document.getElementById('imageInput');
  const promptText = document.getElementById('promptText').value.trim();
  const delay = parseInt(document.getElementById('delayInput').value, 10) || 10;
  const statusDiv = document.getElementById('status');

  if (fileInput.files.length === 0) {
    statusDiv.innerText = "❌ Please select at least one image file first!";
    return;
  }

  statusDiv.innerText = `⏳ Preparing ${fileInput.files.length} images for processing...`;

  // Convert files to DataURLs
  const fileDataList = [];
  for (let i = 0; i < fileInput.files.length; i++) {
    const file = fileInput.files[i];
    const dataUrl = await readFileAsDataURL(file);
    fileDataList.push({
      name: file.name,
      dataUrl: dataUrl
    });
  }

  // Get active tab in gemini.google.com
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab || !tab.url || !tab.url.includes("gemini.google.com")) {
    statusDiv.innerText = "❌ Error: Please open gemini.google.com in your active tab!";
    return;
  }

  const payload = {
    action: "START_BATCH",
    files: fileDataList,
    prompt: promptText,
    delaySeconds: delay
  };

  try {
    // Try sending message directly
    await sendMessageToTab(tab.id, payload);
    statusDiv.innerText = "🚀 Batch Process Started! Keep the Gemini tab open.\nProcessing images automatically...";
  } catch (err) {
    console.log("Direct message failed, dynamically injecting content script...", err);
    try {
      // Auto-inject content script dynamically
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content.js"]
      });
      
      await new Promise(r => setTimeout(r, 600));

      // Retry sending message
      await sendMessageToTab(tab.id, payload);
      statusDiv.innerText = "🚀 Batch Process Started! Keep the Gemini tab open.\nProcessing images automatically...";
    } catch (injectErr) {
      statusDiv.innerText = "❌ Connection Error: Please refresh gemini.google.com page (press F5) and click Start again.\n(" + injectErr.message + ")";
    }
  }
});

function sendMessageToTab(tabId, message) {
  return new Promise((resolve, reject) => {
    chrome.tabs.sendMessage(tabId, message, (response) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve(response);
      }
    });
  });
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Listen for status updates from content script
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "STATUS_UPDATE") {
    document.getElementById('status').innerText = msg.text;
  }
});
