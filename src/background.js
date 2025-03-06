// Create a context menu item that appears when text is selected
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openInS3",
    title: "Open in S3",
    contexts: ["selection"],
    documentUrlPatterns: [
      "https://cloud.temporal.io/*",
      "http://localhost:8233/*",
      "http://temporal:8233/*",
    ],
  });
});

// Handle the context menu item click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openInS3") {
    // Send a message to the content script to process the selected text
    chrome.tabs.sendMessage(tab.id, { action: "processSelection" });
  }
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, _sendResponse) => {
  if (message.action === "openS3Link" && message.bucket && message.key) {
    // Check if the current URL is localhost:8233
    const currentUrl = new URL(sender.tab.url);
    let s3Url;

    if (
      currentUrl.host === "localhost:8233" ||
      currentUrl.host === "temporal:8233"
    ) {
      // minio encodes the key as base64
      const encodedKey = btoa(message.key);
      s3Url = `http://localhost:8901/browser/${message.bucket}/${encodedKey}`;
    } else {
      s3Url = `https://us-east-1.console.aws.amazon.com/s3/object/${message.bucket}?prefix=${message.key}`;
    }

    chrome.tabs.create({ url: s3Url });
  }
}); 