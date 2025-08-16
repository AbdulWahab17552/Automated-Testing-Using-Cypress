describe('Browser Navigation',()=>{
    it('Browser Nav',()=>{
        cy.visit('https://www.opencart.com/index.php?route=cms/demo')
        cy.get('.nav > :nth-child(3) > a').click()
        // cy.go('back')  
        cy.go(1)
        cy.go(-1)
        // cy.go('forward')
        cy.reload()
    })
})