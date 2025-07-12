#!/bin/bash

echo "🚀 Setting up Flutter Web with Cypress Automation"

# Check if Flutter is installed
if ! command -v flutter &> /dev/null; then
    echo "❌ Flutter is not installed. Please install Flutter first:"
    echo "   https://flutter.dev/docs/get-started/install"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first:"
    echo "   https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Install Flutter dependencies
echo "📦 Installing Flutter dependencies..."
flutter pub get

# Install Node.js dependencies
echo "📦 Installing Node.js dependencies..."
npm install

# Build Flutter web app
echo "🔨 Building Flutter web app..."
flutter build web

echo "✅ Setup completed successfully!"
echo ""
echo "🎯 Next steps:"
echo "1. Start the Flutter web server: npm run serve:web"
echo "2. In another terminal, run tests: npm run cypress:run"
echo "3. Or open Cypress UI: npm run cypress:open"
echo ""
echo "📚 For more information, see README.md"