// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "processSelection") {
    processSelectedText();
  }
});

// Process the selected text
function processSelectedText() {
  const selectedText = window.getSelection().toString().trim();
  
  if (!selectedText) {
    console.error("No text selected");
    return;
  }
  
  try {
    // Try to parse the selected text as JSON
    let jsonData;
    
    // Handle the case where the selection might include surrounding text
    // Try to find a valid JSON object within the selection
    try {
      jsonData = JSON.parse(selectedText);
    } catch (e) {
      // Try to find JSON-like content within the selection
      const jsonMatch = selectedText.match(/\{[^]*\}/);
      if (jsonMatch) {
        try {
          jsonData = JSON.parse(jsonMatch[0]);
        } catch (innerError) {
          console.error("Failed to parse JSON within selection:", innerError);
          return;
        }
      } else {
        console.error("No valid JSON found in selection");
        return;
      }
    }
    
    // Check if the JSON has the expected structure
    if (jsonData && jsonData.bucket && jsonData.key) {
      // Send the bucket and key to the background script
      chrome.runtime.sendMessage({
        action: "openS3Link",
        bucket: jsonData.bucket,
        key: jsonData.key
      });
    } else {
      console.error("Selected JSON does not contain required bucket and key properties");
    }
  } catch (error) {
    console.error("Error processing selected text:", error);
  }
} 