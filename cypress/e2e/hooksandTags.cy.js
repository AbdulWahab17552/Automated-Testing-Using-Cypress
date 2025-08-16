// Hooks
// 1.before
// 2.after
// 3.beforeEach
// 4.afterEach

// Tags
// 1.skip
// 2.only

describe('Hooks and Tags', () => {

})
before(() => {
    cy.log("******Launch the app*******")
})
after(() => {
    cy.log("*****Close the app***")
})
beforeEach(() => {
    cy.log("*****login to App****")
})
afterEach(() => {
    cy.log("*****logout****")
})
it.only('Search', () => {
    cy.log("****Search*****")
})
it('Advanced Search', () => {
    cy.log("****Advanced Search*****")
})
it('Listing Products', () => {
    cy.log("****Listing Products*****")
})
