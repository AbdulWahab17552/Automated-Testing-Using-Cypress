describe('handling child Tabs', () => {

  it('handling child Tabs - Approach 1', () => {
    cy.visit('https://the-internet.herokuapp.com/windows');
    // cy.get('.example > a').invoke('removeAttr', 'target').click();
    // cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
    cy.wait(5000);
    cy.go('back');
  });

  it('handling child Tabs - Approach 2', () => {
    cy.visit('https://the-internet.herokuapp.com/windows');
    cy.get('.example > a').then((e) => {
      let url = e.prop('href');
      cy.visit(url);
    });
  });

});
