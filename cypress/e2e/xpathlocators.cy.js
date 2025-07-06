describe('XpathLocators', () => {
  it('find number of products', () => {
    cy.visit("http://www.automationpractice.pl/index.php");

    // Wait for products to load if needed
    cy.xpath("//ul[contains(@class, 'product_list')]/li")
      .should('have.length.at.least', 3); // Check at least one product
  });
  it('Chained Xpath', () => {
    cy.visit("http://www.automationpractice.pl/index.php");

    // Wait for products to load if needed
    cy.xpath("//ul[contains(@class, 'product_list')]").xpath('./li')
      .should('have.length.at.least', 3); // Check at least one product
  });
});
