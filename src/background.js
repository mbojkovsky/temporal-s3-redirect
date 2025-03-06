// Create a context menu item that appears when text is selected
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openInS3",
    title: "Open in S3",
    contexts: ["selection"],
    documentUrlPatterns: ["https://cloud.temporal.io/*"]
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
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "openS3Link" && message.bucket && message.key) {
    // Construct the S3 URL
    // Using AWS console URL format
    const s3Url = `https://us-east-1.console.aws.amazon.com/s3/object/${message.bucket}?prefix=${message.key}`;
    
    // Open the S3 URL in a new tab
    chrome.tabs.create({ url: s3Url });
  }
}); 