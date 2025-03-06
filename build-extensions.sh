#!/bin/bash
source .env

# Check if no arguments provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 [--firefox] [--chrome]"
    echo "  --firefox    Build Firefox extension"
    echo "  --chrome     Build Chrome extension"
    exit 1
fi

# Process arguments
for arg in "$@"; do
    case $arg in
        --firefox)
            echo "Building Firefox extension..."
            cp manifests/manifest.firefox.json manifest.json
            web-ext sign --source-dir=. --channel=unlisted --api-key=$FF_JWT_ISSUER --api-secret=$FF_JWT_SECRET --ignore-files=manifests/* .env
            rm manifest.json
            ;;
        --chrome)
            echo "Building Chrome extension..."
            cp manifests/manifest.firefox.json manifest.json
            zip -r web-ext-artifacts/temporal-s3-extension-$(date +%Y%m%d).zip manifest.json icons/* src/* package.json
            rm manifest.json
            ;;
    esac
done