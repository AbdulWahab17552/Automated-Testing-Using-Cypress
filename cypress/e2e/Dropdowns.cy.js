describe("Dropdowns", () => {
    it("Dropdowns Testing", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#billname").click()
        cy.get("#select2-billing_country-container").click()
        cy.get("input.select2-search__field").type('Italy').type('{enter}')
    })
     it("Autosuggest Dropdowns Testing", () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Lahore')
        cy.get('.suggestion-title').contains('Lahore Fort').click()
        // cy.get("#select2-billing_country-container").click()
        // cy.get("input.select2-search__field").type('Italy').type('{enter}')
    })
    it("Dynamic Dropdowns", () => {
    cy.visit("https://www.google.com/")
    cy.get('.gLFyf').type('Cypress Automation')
    // cy.wait(3000)
    cy.get('div.wM6W7d>span').each(($el, index, $list) => {
        if ($el.text() === 'cypress automation interview questions') {
            cy.wrap($el).click()
        }
    })
    cy.get('.gLFyf').should('have.value', 'cypress automation interview questions')
    // cy.get("#select2-billing_country-container").click()
    // cy.get("input.select2-search__field").type('Italy').type('{enter}')
})

})
