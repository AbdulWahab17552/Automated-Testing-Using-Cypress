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

// Custom commands for Flutter web testing
Cypress.Commands.add('waitForFlutter', () => {
  // Wait for Flutter to be ready
  cy.wait(2000)
  cy.get('flt-glass-pane', { timeout: 10000 }).should('exist')
})

Cypress.Commands.add('getByTestId', (testId) => {
  return cy.get(`[data-test-id="${testId}"]`)
})

Cypress.Commands.add('clickByTestId', (testId) => {
  return cy.getByTestId(testId).click()
})

Cypress.Commands.add('typeByTestId', (testId, text) => {
  return cy.getByTestId(testId).type(text)
})

Cypress.Commands.add('shouldBeVisible', (testId) => {
  return cy.getByTestId(testId).should('be.visible')
})

Cypress.Commands.add('shouldNotBeVisible', (testId) => {
  return cy.getByTestId(testId).should('not.exist')
})

Cypress.Commands.add('shouldHaveText', (testId, text) => {
  return cy.getByTestId(testId).should('contain.text', text)
})

Cypress.Commands.add('shouldHaveValue', (testId, value) => {
  return cy.getByTestId(testId).should('have.value', value)
})