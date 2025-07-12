# Quick Start Guide

Get your Flutter web app with Cypress automation running in minutes!

## Prerequisites

- Flutter SDK (3.10.0+)
- Node.js (16+)
- npm

## Quick Setup

1. **Run the setup script:**
   ```bash
   ./scripts/setup.sh
   ```

2. **Start the Flutter web server:**
   ```bash
   npm run serve:web
   ```

3. **Run tests (in a new terminal):**
   ```bash
   npm run cypress:run
   ```

## Alternative: Manual Setup

If you prefer manual setup:

```bash
# Install dependencies
flutter pub get
npm install

# Build the app
flutter build web

# Start server
flutter run -d web-server --web-port 3000

# Run tests (in another terminal)
npm run cypress:run
```

## Test the App

1. Open your browser to `http://localhost:3000`
2. Try the interactive elements:
   - Click the Increase/Decrease buttons
   - Type in the text input field
   - Toggle the visibility button

## Run Different Test Modes

- **Interactive mode:** `npm run cypress:open`
- **Headless mode:** `npm run cypress:run`
- **With browser visible:** `npm run cypress:run:headed`

## What's Included

- ✅ Flutter web app with interactive elements
- ✅ Comprehensive Cypress test suite
- ✅ Custom commands for Flutter testing
- ✅ CI/CD ready with GitHub Actions
- ✅ Proper test IDs and selectors

## Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Look at the test files in `cypress/e2e/` for examples
- Review the custom commands in `cypress/support/e2e.js`

Happy testing! 🚀