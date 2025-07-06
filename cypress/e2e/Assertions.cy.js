


describe("Assertions Demo", () => {
    // it("Implicit Assertions", () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     // cy.url().should('include','orangehrmlive.com')
    //     // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     // cy.url().should('contain','orangehrm')
    //     // cy.url().should('include', 'orangehrmlive.com')
    //     //     .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     //     .should('contain', 'orangehrm')

    //          cy.url().should('include', 'orangehrmlive.com')
    //         .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //         .and('not.contain','sorangehrm')
    //         cy.title().should('include','Orange')
    //         .and('eq','OrangeHRM')
    //         .and('contain','HRM')
    //         cy.get('.orangehrm-login-branding > img').should('be.visible')
    //         .and('exist')
    //         cy.xpath('//a').should('have.length','5')
    //         cy.get('input[placeholder="Username"]').type('admin')
    //         cy.get('input[placeholder="Username"]').should('have.value','admin')
    // })
    it("Explicit Assertions", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[placeholder="Username"]').type('Admin')
        cy.get('input[placeholder="Password"]').type('admin123')
        cy.get("button[type='submit']").click()

        let expName="Mand 123";

        cy.get('.oxd-userdropdown-name').then(  (x)=>{
            // BDD Style
             let actName=x.text()
             expect(actName).to.equal(expName)

            //  TDD Style
            assert(actName,expName)
            assert.notEqual(actName,expName)

        })


    })
})