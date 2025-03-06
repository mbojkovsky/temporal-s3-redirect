# S3 Redirect for Temporal

A browser extension that allows you to highlight JSON with S3 bucket and key information on Temporal Cloud, right-click, and open the object directly in AWS S3 console.

## Features

- Works on both Chrome and Firefox
- Context menu integration for easy access
- Parses selected JSON to extract S3 bucket and key information
- Opens the corresponding S3 object in AWS console

## Installation

### Chrome

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top right corner
4. Click "Load unpacked" and select the extension directory
5. The extension should now be installed and active

### Firefox

1. Download or clone this repository
2. **Important**: Rename `manifest.firefox.json` to `manifest.json` (or replace the existing manifest.json with manifest.firefox.json)
3. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`
4. Click "Load Temporary Add-on..."
5. Navigate to the extension directory and select the `manifest.json` file
6. The extension should now be installed and active

For permanent installation in Firefox:
1. Make sure you're using the Firefox manifest (rename `manifest.firefox.json` to `manifest.json`)
2. Zip the contents of the extension directory
3. Sign the extension through the [Firefox Add-ons Developer Hub](https://addons.mozilla.org/en-US/developers/)
4. Install the signed extension

## Usage

1. Navigate to https://cloud.temporal.io/
2. Find and select JSON text that contains S3 bucket and key information
3. Right-click on the selected text
4. Click "Open in S3" from the context menu
5. The S3 object will open in a new tab in the AWS console

## Example JSON Format

The extension looks for JSON with the following structure:

```json
{
  "bucket": "your-s3-bucket-name",
  "key": "path/to/your/object.ext"
}
```

## Development

This extension is built to be compatible with both Chrome and Firefox. Due to differences in how these browsers implement the WebExtension API, there are two manifest files:

- `manifest.json`: For Chrome (Manifest V3)
- `manifest.firefox.json`: For Firefox (Manifest V2)

When developing for Firefox, rename `manifest.firefox.json` to `manifest.json` or replace the existing file.

### Files Structure

- `manifest.json`: Chrome extension configuration (Manifest V3)
- `manifest.firefox.json`: Firefox extension configuration (Manifest V2)
- `src/background.js`: Background script for handling context menu and navigation
- `src/content.js`: Content script for processing selected text
- `src/polyfill.js`: Browser compatibility layer (used in Firefox)
- `icons/`: Extension icons

## License

MIT
