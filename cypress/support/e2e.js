// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Flutter web specific setup
beforeEach(() => {
  // Wait for Flutter web to be ready
  cy.window().should('have.property', 'flutterCanvasKit')
  
  // Set up viewport for Flutter web
  cy.viewport(1280, 720)
  
  // Configure Flutter web renderer if needed
  if (Cypress.env('flutter_web_renderer') === 'html') {
    cy.visit('/?web-renderer=html')
  } else {
    cy.visit('/?web-renderer=canvaskit')
  }
})

// Global error handling for Flutter web
Cypress.on('uncaught:exception', (err, runnable) => {
  // Flutter web sometimes throws harmless errors
  if (err.message.includes('flutter')) {
    return false
  }
  return true
})

// Custom assertion for Flutter widgets
chai.use(function (chai, utils) {
  chai.Assertion.addMethod('flutterWidget', function (selector) {
    const obj = this._obj
    const flutterElement = obj.get(selector)
    
    this.assert(
      flutterElement.length > 0,
      `expected Flutter widget with selector ${selector} to exist`,
      `expected Flutter widget with selector ${selector} not to exist`,
      selector
    )
  })
})