describe('Data driven', () => {
    // it.skip('data Driven Testing', () => {
    //     cy.fixture('test').then((test1) => {
    //         cy.visit("https://opensource-demo.orangehrmlive.com/")
    //         test1.forEach((testdata) => {
    //             cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(testdata.username)
    //             cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(testdata.password)
    //             cy.get('Button[type="submit"]').click();
    //             if (testdata.username == "Admin" && testdata.password == "admin123") {
    //                 cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', testdata.expected)
    //                 cy.wait(3000)
    //                 cy.get('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click()
    //                 cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)').click()
    //             }
    //             else
    //             {
    //                 cy.get('.oxd-alert-content > .oxd-text').should('have.text',testdata.expected)

    //             }
    //         })
    //     })
    // })
    // it('data Driven Testing', () => {
    //     cy.fixture('empty').then((test3) => {
    //         cy.visit("https://opensource-demo.orangehrmlive.com/")
    //         test3.forEach((testingdata) => {
    //             cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(testingdata.username)
    //             cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(testingdata.password)
    //             cy.get('Button[type="submit"]').click();})
    //             while(testingdata.username=="" || testingdata.password==""){
    //                 cy.get("oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message").should('have.text',test1data.expected);
    //             }
    //         })

    //     })
    it('test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(null).should('have.text',"required")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(null)
        cy.get('Button[type="submit"]').click();
         cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text','Required');
         cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text','Required');
    })
})
    
    
