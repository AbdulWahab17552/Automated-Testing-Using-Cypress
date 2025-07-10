describe('Practice Website', () => {
  it("Submits form and validates error", () => {
    cy.visit("https://www.ropstam.com/")
    cy.get('.mobile_menu_bar').click()
    cy.get('#mobile_menu1 > .et_pb_menu_page_id-914 > [href="https://www.ropstam.com/services/"]').click()

    cy.get('#input_1_1').type('Abdul Wahab')
    cy.get('#input_1_3').type('dkasjdkjdklasjdkksdj')
    cy.get('#input_1_4').type('dksdkslkdlkd;ask')
    cy.get('#input_1_5').type('CortechSols')
    cy.get('#input_1_6').type('Lorem ipsum qwerty qwerty')

    cy.get('#gform_submit_button_1').click()

   
    cy.on('window:alert', (text) => {
      expect(text).to.contain('Please fix the required fields with accurate information!');
    })

   
    cy.get('.gform_validation_errors')
      .should('have.text', 'Please fix the required fields with accurate information!')
  })

  it('Visit homepage only', () => {
    cy.visit('https://www.ropstam.com/')
  })
})

    
