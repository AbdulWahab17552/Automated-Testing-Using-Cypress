describe('Testing',()=>{
    it('testing homepage',()=>{
        cy.visit("https://app.motor-cut.com/")
        cy.get('.border').click()
    })
})