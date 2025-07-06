describe('Zoho Sign In Page', () => {
  it('should find and fill the login form', () => {
    // STEP 1: Visit the page
    cy.visit('https://support.orangehrm.com/portal/en/signin');

    // STEP 2: Wait for form container to load (log page to console)
    cy.document().its('readyState').should('eq', 'complete');

    // STEP 3: Try finding the form first
    cy.get('form[name="signinform"]', { timeout: 10000 }).should('exist');

    // STEP 4: Type in email
    cy.get('input[name="username"]', { timeout: 10000 })
      .should('be.visible')
      .type('testuser@example.com');

    // STEP 5: Type in password
    cy.get('input[name="password"]', { timeout: 10000 })
      .should('be.visible')
      .type('TestPassword123');

    // STEP 6: Submit form
    cy.get('form[name="signinform"]').submit();

    // Optional: Validate response or failure
    cy.url().should('not.include', 'signin.ac'); // Assuming successful login redirects
  });
});
