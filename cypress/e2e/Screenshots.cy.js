describe('Screenshots Handling',()=>{
    it('Screenshots handling',()=>{
        cy.visit("https://www.opencart.com/index.php?route=cms/demo")
        // cy.screenshot("Homepage")
        // cy.get('.border-right > .demonstration-box > .box-overlay').screenshot("LOGO")

        // Automatically Capture screenshot and video on failure 
        cy.get("body > header:nth-child(3) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").click()
        cy.get('#extension-search > h4').should('have.text','478789r')


    })
})