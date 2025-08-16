describe('How to use Fixture', () => {
    // it.skip('direct method', () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/")
    //     cy.fixture('data').then((test) => {
    //         cy.get('input[Placeholder="Username"]').type(test.username)
    //         cy.get('input[Placeholder="Password"]').type(test.password)
    //         cy.get('Button[type="submit"]').click()
    //         cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', test.expected)

    //     })

    // })
    let test2;
    before(() => {
        cy.fixture('data').then((test1) => {
            test2 = test1;
        })
    })
    it('using Hooks', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get('input[Placeholder="Username"]').type(test2.username)
        cy.get('input[Placeholder="Password"]').type(test2.password)
        cy.get('Button[type="submit"]').click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', test2.expected)

    })
})