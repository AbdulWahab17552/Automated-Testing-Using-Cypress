# Flutter Web Automation Testing with Cypress

**Author:** Abdul Wahab (NUST)

This project demonstrates how to set up and use Cypress for automated testing of Flutter web applications. It includes custom commands, test examples, and a complete testing framework specifically designed for Flutter web apps.

## 🚀 Features

- **Custom Cypress Commands** for Flutter web testing
- **Flutter-specific selectors** and utilities
- **API Integration Testing** with mocked responses
- **Responsive Design Testing** across different viewports
- **Error Handling and Loading States** testing
- **Form Validation and Interaction** testing
- **Modal and Dialog** testing
- **Search and Pagination** testing
- **Real-time Updates** testing simulation

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Flutter SDK (for actual Flutter web projects)
- Modern web browser (Chrome, Firefox, Edge)

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AbdulWahab17552/Automated-Testing-Using-Cypress.git
   cd Automated-Testing-Using-Cypress
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Cypress binary:**
   ```bash
   npx cypress install
   ```

## 🏃 Running Tests

### Start the Test Application
```bash
npm run serve
```
This will start the sample Flutter web application on `http://localhost:8080`

### Run Tests in Different Modes

#### Interactive Mode (Cypress Test Runner)
```bash
npm run test:open
```

#### Headless Mode (CI/CD)
```bash
npm run test
```

#### Browser-Specific Testing
```bash
# Chrome
npm run test:chrome

# Firefox
npm run test:firefox

# Edge
npm run test:edge
```

#### Device-Specific Testing
```bash
# Mobile viewport
npm run test:mobile

# Tablet viewport
npm run test:tablet
```

#### Test Suite Specific
```bash
# UI Tests only
npm run test:ui

# API Integration Tests only
npm run test:api
```

## 📁 Project Structure

```
├── cypress/
│   ├── e2e/
│   │   ├── flutter-app.cy.js           # Main UI tests
│   │   └── flutter-api-integration.cy.js # API integration tests
│   ├── fixtures/
│   │   └── test-data.json              # Test data fixtures
│   └── support/
│       ├── commands.js                 # Custom Flutter commands
│       └── e2e.js                      # Global configuration
├── web/
│   └── index.html                      # Sample Flutter web app
├── cypress.config.js                   # Cypress configuration
├── package.json                        # Dependencies and scripts
└── README.md                           # This file
```

## 🎯 Custom Flutter Commands

### Navigation Commands
```javascript
// Wait for Flutter app to be ready
cy.waitForFlutter()

// Navigate and wait for Flutter navigation
cy.waitForFlutterNavigation()

// Verify current route
cy.shouldBeOnFlutterRoute('/dashboard')
```

### Element Interaction Commands
```javascript
// Find Flutter widgets
cy.getFlutterWidget('my-key')
cy.getFlutterWidgetByLabel('Submit Button')

// Interact with Flutter widgets
cy.tapFlutterWidget('[data-testid="button"]')
cy.enterFlutterText('[data-testid="input"]', 'Hello World')
cy.scrollFlutterWidget('[data-testid="list"]', 'down')
```

### Form and Input Commands
```javascript
// Handle dropdowns
cy.selectFlutterDropdown('[data-testid="dropdown"]', 'Option 1')

// Submit forms
cy.submitFlutterForm('[data-testid="form"]')
```

### State Management Commands
```javascript
// Handle loading states
cy.waitForFlutterLoading()

// Handle animations
cy.waitForFlutterAnimation()

// Take screenshots
cy.screenshotFlutter('test-screenshot')
```

## 🧪 Test Examples

### Basic App Loading Test
```javascript
it('should load the Flutter app successfully', () => {
  cy.visit('/')
  cy.waitForFlutter()
  cy.get('flt-glass-pane').should('be.visible')
  cy.title().should('not.be.empty')
})
```

### Form Testing
```javascript
it('should handle form interactions', () => {
  cy.get('[data-testid="form-page"]').click()
  cy.waitForFlutterNavigation()
  
  cy.get('[data-testid="name-input"]').type('John Doe')
  cy.get('[data-testid="email-input"]').type('john@example.com')
  cy.selectFlutterDropdown('[data-testid="country-dropdown"]', 'United States')
  
  cy.get('[data-testid="submit-button"]').click()
  cy.waitForFlutterLoading()
  cy.contains('Success').should('be.visible')
})
```

### API Integration Testing
```javascript
it('should handle API data loading', () => {
  cy.intercept('GET', '/api/users', { fixture: 'users.json' }).as('getUsers')
  
  cy.visit('/users')
  cy.waitForFlutter()
  cy.wait('@getUsers')
  
  cy.get('[data-testid="user-list"]').should('be.visible')
})
```

## 🔧 Configuration

### Cypress Configuration (`cypress.config.js`)
```javascript
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    // Flutter-specific settings
    experimentalStudio: true,
    experimentalWebKitSupport: true,
  },
  env: {
    flutter_web_renderer: 'canvaskit', // or 'html'
  },
})
```

### Environment Variables
- `flutter_web_renderer`: Set to `canvaskit` or `html` to test different renderers
- `test_timeout`: Override default timeout values

## 📱 Testing Flutter Web Renderers

Flutter web supports two rendering modes:

### CanvasKit Renderer (Default)
```javascript
// Test with CanvasKit renderer
cy.visit('/?web-renderer=canvaskit')
```

### HTML Renderer
```javascript
// Test with HTML renderer
cy.visit('/?web-renderer=html')
```

## 🐛 Common Issues and Solutions

### 1. Flutter App Not Loading
```javascript
// Ensure Flutter is ready before testing
cy.waitForFlutter()
cy.window().should('have.property', 'flutterCanvasKit')
```

### 2. Element Not Found
```javascript
// Use Flutter-specific selectors
cy.get('flt-glass-pane').should('be.visible')
cy.get('[data-testid="element"]').should('exist')
```

### 3. Animation Issues
```javascript
// Wait for animations to complete
cy.waitForFlutterAnimation()
```

### 4. Network Requests
```javascript
// Mock API responses
cy.intercept('GET', '/api/**', { fixture: 'data.json' })
```

## 🎨 Best Practices

1. **Use data-testid attributes** in your Flutter widgets
2. **Wait for Flutter to be ready** before starting tests
3. **Handle loading states** explicitly
4. **Mock API responses** for consistent testing
5. **Use fixtures** for test data
6. **Take screenshots** for visual regression testing
7. **Test different viewports** for responsive design

## 🔄 CI/CD Integration

### GitHub Actions Example
```yaml
name: Cypress Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        
      - name: Install dependencies
        run: npm ci
        
      - name: Start server
        run: npm run serve &
        
      - name: Run Cypress tests
        uses: cypress-io/github-action@v2
        with:
          wait-on: 'http://localhost:8080'
          browser: chrome
```

## 📊 Reporting

Cypress generates detailed test reports including:
- Screenshots on failure
- Video recordings of test runs
- Detailed test logs
- Performance metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or issues:
- Create an issue in the GitHub repository
- Contact: Abdul Wahab (NUST)

## 🔗 Useful Links

- [Cypress Documentation](https://docs.cypress.io/)
- [Flutter Web Documentation](https://flutter.dev/web)
- [Testing Flutter Web Apps](https://flutter.dev/docs/testing)

---

**Happy Testing! 🎉**
