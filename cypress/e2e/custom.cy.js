describe('Custom Commands', () => {
    // it.skip('handling links', () => {
    //     // direct method
    //     cy.visit("https://playwright.dev/")
    //     // cy.get('.getStarted_Sjon').click()

    //     // through Custom Commands
    //     cy.clickLink('Get started')
    // })
    // it.only('Overwritting Existing Commands', () => {
    //     cy.visit("https://playwright.dev/")
    //     cy.clickLink('GET STARTED')
    // })
  it('Login Command',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.LoginApp("Admin","admin123")

  })

})