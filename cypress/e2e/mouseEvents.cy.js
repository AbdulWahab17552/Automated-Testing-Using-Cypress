import 'cypress-iframe';
import 'cypress-drag-drop'
describe('Mouse Operations', () => {
    // it.skip('Mouse Hover',()=>{
    //     cy.visit("https://demo.opencart.com/")
    //     cy.get('nav-link').should('not.be.visible')
    //   cy.visit('.navbar-toggler').trigger('mouseover').click()
    //    cy.get('nav-link').should('be.visible')
    // })
    // // Approach 1
    // it.only('Right Click', () => {
    //     cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html')
    //     cy.get('.context-menu-one').trigger('contextmenu');
    //     cy.get('.context-menu-icon-copy > span').should('be.visible')
    // })
    // // Approach 2
    // it('Right Click', () => {
    //     cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html')
    //     cy.get('.context-menu-one').rightclick();
    //     cy.get('.context-menu-icon-copy > span').should('be.visible')
    // })
    it('Double Click', () => {
        cy.visit('https://www.w3schools.com/TAgs/tryit.asp?filename=tryhtml5_ev_ondblclick')
        cy.frameLoaded('#iframeResult')
        //  Appraoch 1
        cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick')
        cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').should('have.value', 'Hello World')
        // Approach 2
        cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').dblclick()
        cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').should('have.value', 'Hello World')
    })
    it('drag and drop using plugin',()=>{
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.wait('3000')
        cy.get('source').drag('destination',{force:true})
    })
    it('Page Scrolling',()=>{
        cy.visit('https://www.w3schools.com/')
        cy.get('body > div:nth-child(12) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(8) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > a:nth-child(3)').scrollIntoView({duration:2000})
        cy.get('#search2').scrollIntoView({duration:2000})
    })
})