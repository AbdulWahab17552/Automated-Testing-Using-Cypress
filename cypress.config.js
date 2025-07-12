const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Flutter web specific settings
    experimentalStudio: true,
    experimentalWebKitSupport: true,
  },
  
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
  
  // Environment variables for Flutter web testing
  env: {
    flutter_web_renderer: 'canvaskit', // or 'html'
    test_timeout: 30000,
  },
  
  // Retry configuration for Flutter web elements
  retries: {
    runMode: 2,
    openMode: 0,
  },
})