// ***********************************************
// Custom commands for Flutter web testing
// ***********************************************

// Wait for Flutter app to be ready
Cypress.Commands.add('waitForFlutter', (timeout = 10000) => {
  cy.window({ timeout }).should('have.property', 'flutterCanvasKit')
  cy.get('flt-glass-pane', { timeout }).should('be.visible')
})

// Find Flutter widget by key
Cypress.Commands.add('getFlutterWidget', (key) => {
  return cy.get(`[data-flutter-key="${key}"]`)
})

// Find Flutter widget by semantic label
Cypress.Commands.add('getFlutterWidgetByLabel', (label) => {
  return cy.get(`[aria-label="${label}"]`)
})

// Tap Flutter widget (equivalent to Flutter's tap)
Cypress.Commands.add('tapFlutterWidget', (selector) => {
  cy.get(selector).click({ force: true })
})

// Enter text in Flutter TextField
Cypress.Commands.add('enterFlutterText', (selector, text) => {
  cy.get(selector).clear().type(text, { force: true })
})

// Scroll Flutter widget
Cypress.Commands.add('scrollFlutterWidget', (selector, direction = 'down', distance = 100) => {
  cy.get(selector).scrollTo(direction === 'down' ? 'bottom' : 'top', { duration: 500 })
})

// Wait for Flutter navigation
Cypress.Commands.add('waitForFlutterNavigation', (timeout = 5000) => {
  cy.wait(1000) // Flutter navigation animation
  cy.get('flt-glass-pane', { timeout }).should('be.visible')
})

// Check if Flutter widget is visible
Cypress.Commands.add('shouldBeFlutterVisible', { prevSubject: true }, (subject) => {
  cy.wrap(subject).should('be.visible')
})

// Check if Flutter widget contains text
Cypress.Commands.add('shouldContainFlutterText', { prevSubject: true }, (subject, text) => {
  cy.wrap(subject).should('contain.text', text)
})

// Flutter-specific drag and drop
Cypress.Commands.add('dragFlutterWidget', (sourceSelector, targetSelector) => {
  cy.get(sourceSelector).trigger('mousedown', { which: 1 })
  cy.get(targetSelector).trigger('mousemove').trigger('mouseup')
})

// Wait for Flutter animation to complete
Cypress.Commands.add('waitForFlutterAnimation', (duration = 1000) => {
  cy.wait(duration)
})

// Take screenshot with Flutter context
Cypress.Commands.add('screenshotFlutter', (name) => {
  cy.waitForFlutterAnimation()
  cy.screenshot(name)
})

// Custom command for Flutter form submission
Cypress.Commands.add('submitFlutterForm', (formSelector) => {
  cy.get(formSelector).within(() => {
    cy.get('[type="submit"]').click()
  })
})

// Command to handle Flutter loading states
Cypress.Commands.add('waitForFlutterLoading', (timeout = 10000) => {
  cy.get('[data-flutter-loading="true"]', { timeout }).should('not.exist')
})

// Command to interact with Flutter dropdowns
Cypress.Commands.add('selectFlutterDropdown', (dropdownSelector, optionText) => {
  cy.get(dropdownSelector).click()
  cy.contains(optionText).click()
})

// Command to verify Flutter route
Cypress.Commands.add('shouldBeOnFlutterRoute', (route) => {
  cy.url().should('include', route)
})