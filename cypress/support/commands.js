// // ***********************************************
// // This example commands.js shows you how to
// // create various custom commands and overwrite
// // existing commands.
// //
// // For more comprehensive examples of custom
// // commands please read more here:
// // https://on.cypress.io/custom-commands
// // ***********************************************
// //
// //
// // -- This is a parent command --
// // Cypress.Commands.add('login', (email, password) => { ... })
// //
// //
// // -- This is a child command --
// // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// //
// //
// // -- This is a dual command --
// // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// //
// //
// // -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

Cypress.Commands.add('getiframe',(iframe)=>{
 return cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
         .should('be.visible')
         .then('cy.wrap');
})

// custom command for clicking on the link
Cypress.Commands.add('clickLink',(label)=>{
cy.get('a').contains(label).click()

})
Cypress.Commands.overwriteQuery('contains', (originalFn, subject, filter, text, options = {}) => {
  // determine if a filter argument was passed
  if (typeof text === 'object') {
    options = text
    text = filter
    filter = undefined
  }

  options.matchCase = false

  return originalFn(subject, filter, text, options)
})

// Custom Login Command
Cypress.Commands.add('LoginApp',(Username,Password)=>{
       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Username)
       cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Password)
      cy.get('.oxd-button').click()
})