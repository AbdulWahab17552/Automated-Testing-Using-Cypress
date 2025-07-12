# Flutter Web with Cypress Automation

This project demonstrates how to automate a Flutter web application using Cypress. It includes a simple Flutter web app with various interactive elements and comprehensive Cypress tests.

## Features

- **Flutter Web Application**: A demo app with counter, text input, and visibility toggle functionality
- **Cypress Automation**: Comprehensive test suite covering all app features
- **Custom Commands**: Reusable Cypress commands for Flutter web testing
- **Test Data Attributes**: Proper test IDs for reliable element selection

## Prerequisites

- [Flutter SDK](https://flutter.dev/docs/get-started/install) (3.10.0 or higher)
- [Node.js](https://nodejs.org/) (16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Setup Instructions

### 1. Install Flutter Dependencies

```bash
flutter pub get
```

### 2. Install Node.js Dependencies

```bash
npm install
```

### 3. Build Flutter Web App

```bash
flutter build web
```

### 4. Run Flutter Web Server

```bash
flutter run -d web-server --web-port 3000
```

Or use the npm script:

```bash
npm run serve:web
```

## Running Tests

### Open Cypress Test Runner (Interactive Mode)

```bash
npm run cypress:open
```

### Run Tests in Headless Mode

```bash
npm run cypress:run
```

### Run Tests with Browser Visible

```bash
npm run cypress:run:headed
```

### Run Complete Test Suite (Build + Serve + Test)

```bash
npm run test:all
```

## Test Structure

### Test Files

- `cypress/e2e/counter.cy.js` - Tests counter functionality
- `cypress/e2e/text-input.cy.js` - Tests text input functionality  
- `cypress/e2e/visibility-toggle.cy.js` - Tests visibility toggle functionality
- `cypress/e2e/integration.cy.js` - Integration tests combining multiple features

### Custom Commands

The project includes custom Cypress commands for Flutter web testing:

- `cy.waitForFlutter()` - Waits for Flutter to be ready
- `cy.getByTestId(testId)` - Gets element by test ID
- `cy.clickByTestId(testId)` - Clicks element by test ID
- `cy.typeByTestId(testId, text)` - Types text into element by test ID
- `cy.shouldBeVisible(testId)` - Asserts element is visible
- `cy.shouldNotBeVisible(testId)` - Asserts element is not visible
- `cy.shouldHaveText(testId, text)` - Asserts element contains text
- `cy.shouldHaveValue(testId, value)` - Asserts input has value

## Flutter App Features

The demo Flutter app includes:

1. **Counter**: Increment/decrement buttons with display
2. **Text Input**: Input field with real-time display
3. **Visibility Toggle**: Button to show/hide elements
4. **Floating Action Button**: Additional increment button

All elements have `data-test-id` attributes for reliable test selection.

## Configuration

### Cypress Configuration (`cypress.config.js`)

- Base URL: `http://localhost:3000`
- Viewport: 1280x720
- Timeouts: 10 seconds
- Video recording enabled
- Screenshots on failure

### Flutter Configuration (`pubspec.yaml`)

- Flutter SDK: >=3.10.0
- Dart SDK: >=3.0.0
- Material Design enabled
- HTTP package for potential API calls

## Best Practices

### For Flutter Web Testing

1. **Use Test IDs**: Always add `data-test-id` attributes to elements you want to test
2. **Wait for Flutter**: Use `cy.waitForFlutter()` before interacting with Flutter elements
3. **Handle Async Operations**: Flutter web may have rendering delays
4. **Test Responsive Design**: Test on different viewport sizes

### For Cypress Tests

1. **Isolated Tests**: Each test should be independent
2. **Descriptive Names**: Use clear test descriptions
3. **Custom Commands**: Reuse common operations
4. **Assertions**: Always verify expected behavior

## Troubleshooting

### Common Issues

1. **Flutter not loading**: Increase timeout in `cypress.config.js`
2. **Elements not found**: Ensure `data-test-id` attributes are present
3. **Tests failing**: Check if Flutter web server is running on port 3000

### Debug Mode

Run tests with browser visible to debug:

```bash
npm run cypress:run:headed
```

## CI/CD Integration

The project includes scripts for CI/CD integration:

```bash
# Build and test in one command
npm run test:all
```

This command:
1. Builds the Flutter web app
2. Starts the web server
3. Runs all Cypress tests
4. Generates reports and videos

## Contributing

1. Add test IDs to new Flutter elements
2. Write tests for new features
3. Update documentation as needed
4. Follow existing test patterns

## License

MIT License - feel free to use this project as a starting point for your Flutter web automation needs.
