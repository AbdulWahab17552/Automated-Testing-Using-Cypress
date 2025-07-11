import 'cypress-iframe';
describe('handling iframes', () => {
    // it('approach1', () => {
    //     cy.visit('https://the-internet.herokuapp.com/iframe')
    //     const iframe = cy.get('#mce_0_ifr')
    //         .its('0.contentDocument.body')
    //         .should('be.visible')
    //         .then('cy.wrap');
    //     //  it will clear the already present text in the iframe and by using cmd+a we can select the particular text
    //     iframe.clear().type('Welcome to Pakistan{cmd+a}')
    //     cy.get("[aria-label='Bold']").click()
    // })
    it('approach2-using custom commands', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.getiframe('#mce_0_ifr').clear().type('Welcome to Pakistan{cmd+a}')
        cy.get("[aria-label='Bold']").click()
    })
    it.only('approach3-using custom commands', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.frameLoaded('#mce_0_ifr')  //will load the frame//
        cy.getiframe('#mce_0_ifr').clear().type('Welcome to Pakistan{cmd+a}')
        cy.get("[aria-label='Bold']").click()
    })

})