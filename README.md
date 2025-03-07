# S3 Redirect for Temporal

A browser extension that allows you to highlight JSON with S3 bucket and key information on Temporal Cloud, right-click, and open the object directly in AWS S3 console.

## Features

- Works on both Chrome and Firefox
- Context menu integration for easy access
- Parses selected JSON to extract S3 bucket and key information
- Opens the corresponding S3 object in AWS console

## Installation

### Chrome

1. Download the latest `.zip` file from the [latest releases](https://github.com/mbojkovsky/temporal-s3-redirect/releases)
2. Extract the downloaded zip file to a folder on your computer
3. Open Chrome and navigate to `chrome://extensions/`
4. Enable "Developer mode" by toggling the switch in the top right corner
5. Click "Load unpacked" and select the extracted extension directory
6. The extension should now be installed and active

> **Important:** Do not delete or move the extracted folder after installation. Chrome references these files directly, and removing them will break the extension.

### Firefox

1. Download the latest `.xpi` file from the [latest release](https://github.com/mbojkovsky/temporal-s3-redirect/releases)
2. Open Firefox
3. Navigate to `about:addons`
4. Click the gear icon and select "Install Add-on From File..."
5. Select the downloaded `.xpi` file
6. Follow the prompts to complete installation
7. The extension should now be installed and active
8. You can now delete the `.xpi` file

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
