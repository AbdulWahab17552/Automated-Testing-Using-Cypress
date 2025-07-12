# Getting Started - Flutter Web Cypress Testing

## Quick Setup (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Test Application
```bash
npm run serve
```
The application will be available at: `http://localhost:8080`

### 3. Run Tests

#### Option A: Interactive Mode (Recommended for Development)
```bash
npm run test:open
```
This opens the Cypress Test Runner where you can see tests running in real-time.

#### Option B: Headless Mode (For CI/CD)
```bash
npm run test
```
This runs all tests in the background and outputs results to the terminal.

## Test What You Built

### Basic Test Commands
```bash
# Run only UI tests
npm run test:ui

# Run only API integration tests
npm run test:api

# Test on mobile viewport
npm run test:mobile

# Test on specific browser
npm run test:chrome
npm run test:firefox
```

## Verify Your Setup

1. **Check server is running**: Visit `http://localhost:8080` in your browser
2. **Run a simple test**: `npm run test:ui`
3. **Check test results**: Tests should pass if setup is correct

## Common First-Time Issues

### Server Not Starting
```bash
# Check if port 8080 is available
lsof -i :8080

# Kill any process using the port
kill -9 <PID>

# Try starting again
npm run serve
```

### Cypress Not Opening
```bash
# Verify Cypress is installed
npx cypress verify

# Clear Cypress cache and reinstall
npx cypress cache clear
npm install
```

### Tests Failing
```bash
# Make sure server is running first
npm run serve

# In a new terminal, run tests
npm run test:open
```

## Next Steps

1. **Explore the Sample App**: Navigate through different pages at `http://localhost:8080`
2. **Examine Test Files**: Look at `cypress/e2e/` folder for test examples
3. **Customize for Your App**: Replace `web/index.html` with your actual Flutter web app
4. **Add Your Tests**: Create new test files in `cypress/e2e/`

## Need Help?

- Check `README.md` for detailed documentation
- Review test files in `cypress/e2e/` for examples
- Look at custom commands in `cypress/support/commands.js`

---

**Ready to test your Flutter web app! 🚀**