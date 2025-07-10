describe('Practice Website', () => {
    it("Practice Website", () => {
        cy.visit("https://www.ropstam.com/")
        cy.get('.mobile_menu_bar').click()
        cy.get('.body > div:nth-child(4) > div:nth-child(1) > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)').click()
    })
})

