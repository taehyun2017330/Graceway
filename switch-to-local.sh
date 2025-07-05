#!/bin/bash
echo "Switching to local development configuration..."
cp package.json.local package.json
echo "✅ Switched to local configuration (no homepage field)"
echo "Run 'npm start' to start local development" 