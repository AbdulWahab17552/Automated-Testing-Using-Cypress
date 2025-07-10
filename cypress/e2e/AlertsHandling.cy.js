
describe('Alerts Handling', () => {
    // it('JS alerts', () => {

    //     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    //     cy.get("button[onClick='jsAlert()']").click()
    //     cy.on('Windows:alert', (t) => {
    //         expect(t).to.contains('I am a Js alert');
    //     })
    //     cy.get('#result').should('have.Text', 'You successfully clicked an alert')
    // })
    // it('Confirmation Alerts', () => {
    //     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    //     cy.get("button[onclick='jsConfirm()']").click()
    //     cy.on('Windows:confirm', (t) => {
    //         expect(t).to.contains('I am a Js confirm');
    //     })

    //     cy.get('#result').should('have.Text', 'You clicked: Ok')
    // })
    // it('Alerts', () => {
    //     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    //     cy.get("button[onclick='jsConfirm()']").click()
    //     cy.on('Windows:confirm', () => false)
    //     cy.get('#result').should('have.Text', 'You clicked: Cancel')

    // })
    // it('Alerts', () => {
    //     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    //     cy.window().then((win) => {
    //         cy.stub(window, 'prompt').returns('Welcome')
    //     })
    //     cy.get("button[onclick='jsConfirm()']").click()
    //     cy.get('#result').should('have.Text', 'You have Entered : Cancel')

    // })
    it('Authentication ALerts',()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{
            auth:{
                  username:"admin",
                  password:"admin"
            }
        })
    })
})

