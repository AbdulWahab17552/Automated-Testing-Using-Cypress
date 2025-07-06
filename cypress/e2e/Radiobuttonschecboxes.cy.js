describe("CheckingUiElements", () => {
    it("Checking Radio buttons and Checkboxes", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#name').type('Abdul Wahab')
        cy.get('#email').type('abdulwahab22556@gmail.com')
        cy.get('input[placeholder="Enter Phone"]').type('03467023624')
        cy.get('#textarea').type('House No# CB 381 Street No#3 Chaklala Rawalpindi')
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')
        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')

        // cy.get('#monday').check().should('be.checked')
        // cy.get('#tuesday').should('not.be.checked')
        // cy.get('#wednesday').should('not.be.checked')
        // cy.get('#thursday').should('not.be.checked')
        // cy.get('#friday').should('not.be.checked')
        // cy.get('#saturday').should('not.be.checked')
        // cy.get('#sunday').should('not.be.checked')

        // cy.get('#tuesday').check().should('be.checked')
        // cy.get('#monday').should('not.be.checked')
        // cy.get('#wednesday').should('not.be.checked')
        // cy.get('#thursday').should('not.be.checked')
        // cy.get('#friday').should('not.be.checked')
        // cy.get('#saturday').should('not.be.checked')
        // cy.get('#sunday').should('not.be.checked')

        // cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked');
        // cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked');

        cy.get('input.form-check-input[type="checkbox"]').first().check()
        cy.get('input.form-check-input[type="checkbox"]').last().check()
        cy.get('#country').select('Canada')
        cy.get('#colors').select('Red')
        cy.get('#animals').select('Cheetah')
        cy.get('#datepicker').type('07/15/2025')
        cy.get('input[name="SelectedDate"]').should('be.visible')
        cy.get('input[name="SelectedDate"]')
            .type('07/20/2025', { force: true })
            .should('have.value', '07/20/2025');

        cy.get('#start-date').type('2025-07-01');
        cy.get('#end-date').type('2025-08-30');
        cy.get('.submit-btn').click()


        // cy.get('#wednesday').check().should('be.checked')
        // cy.get('#tuesday').should('not.be.checked')
        // cy.get('#monday').should('not.be.checked')
        // cy.get('#thursday').should('not.be.checked')
        // cy.get('#friday').should('not.be.checked')
        // cy.get('#saturday').should('not.be.checked')
        // cy.get('#sunday').should('not.be.checked')

        // cy.get('#thursday').check().should('be.checked')
        // cy.get('#tuesday').should('not.be.checked')
        // cy.get('#monday').should('not.be.checked')
        // cy.get('#wednesday').should('not.be.checked')
        // cy.get('#friday').should('not.be.checked')
        // cy.get('#saturday').should('not.be.checked')
        // cy.get('#sunday').should('not.be.checked')

        // cy.get('#friday').check().should('be.checked')
        // cy.get('#tuesday').should('not.be.checked')
        // cy.get('#monday').should('not.be.checked')
        // cy.get('#wednesday').should('not.be.checked')
        // cy.get('#thursday').should('not.be.checked')
        // cy.get('#saturday').should('not.be.checked')
        // cy.get('#sunday').should('not.be.checked')

        // cy.get('#saturday').check().should('be.checked')
        // cy.get('#tuesday').should('not.be.checked')
        // cy.get('#monday').should('not.be.checked')
        // cy.get('#wednesday').should('not.be.checked')
        // cy.get('#thursday').should('not.be.checked')
        // cy.get('#friday').should('not.be.checked')
        // cy.get('#sunday').should('not.be.checked')

        // cy.get('#sunday').check().should('be.checked')
        // cy.get('#tuesday').should('not.be.checked')
        // cy.get('#monday').should('not.be.checked')
        // cy.get('#wednesday').should('not.be.checked')
        // cy.get('#thursday').should('not.be.checked')
        // cy.get('#friday').should('not.be.checked')
        // cy.get('#saturday').should('not.be.checked')


    })
})