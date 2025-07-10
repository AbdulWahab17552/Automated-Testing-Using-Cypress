
describe('Testing', () => {
    it('Form Automation', () => {
        cy.visit("https://vda5500.is.cc/roundcube/")
        cy.get('#rcmloginuser').type('abdul.wahab@cortechsols.com')
        cy.get('#rcmloginpwd').type('Killer50067+')
        cy.get('#rcmloginsubmit').click()
        cy.wait(3000)
        cy.get('.no-bs').type('hcm{enter}')
        cy.get('.subject')
            .filter(':contains("MiHCM")') // partial subject text
            .eq(2) // or use `.eq(1)` for second result
            .click();
        cy.get('#rcmbtn124').click()
    })

})