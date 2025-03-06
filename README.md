# Temporal S3 Redirect

A browser extension that allows you to highlight JSON containing S3 bucket and key information on the Temporal Cloud website, right-click, and open the corresponding object in the AWS S3 console.
Assumes us-east-1 region. 

## Installation

### Development Installation

1. Clone this repository

2. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top-right corner
   - Click "Load unpacked" and select the root directory of this project

### Usage

1. On the Temporal Cloud website (https://cloud.temporal.io), find JSON text that contains S3 bucket and key information in this format:
   ```json
   {
     "bucket": "my-bucket",
     "key": "my-key"
   }
   ```

2. Highlight the JSON text (you can select more text around it, the extension will try to find valid JSON)

3. Right-click and select "Open in S3" from the context menu

4. The extension will open the AWS S3 console with the specified bucket and key

## Development

- `src/background.js`: Handles context menu creation and click events
- `src/content.js`: Processes selected text and extracts S3 information

## TODO:

- Improve parsing for selection to introduce some leeway for selection
- Include localhost & minio redirects
- Firefox support
- Release process
