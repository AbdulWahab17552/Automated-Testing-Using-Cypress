describe('CSSLocators', () => {
  it("CssLocators", () => {
    cy.visit("http://www.automationpractice.pl/index.php");

    // Search for "Dress"
    cy.get("#search_query_top").type("Dress");
    cy.get("[name='submit_search']").click();
    cy.get(".lighter").contains("Dress");

    // Go to Sign in
    cy.get(".login").click();

    // Create account
    cy.get("#email_create").type("Wahabkhattak335@gmail.com");
    cy.get("#SubmitCreate").click();

    // Select gender
    cy.get('input#id_gender1').check(); // Mr.
    // cy.get('input#id_gender2').check(); // Uncomment for Mrs.

    // Fill out name
    cy.get('#customer_firstname').type('Abdul');
    cy.get('#customer_lastname').type('Wahab');

    // Password
    cy.get('#passwd').type('Wahab@123');

    // Date of Birth
    cy.get('select[name="days"]').select('1');
    cy.get('select[name="months"]').select('August');
    cy.get('select[name="years"]').select('2003');

    // Newsletter checkbox
    cy.get('input[name="newsletter"]').check();

    // Submit the form
    cy.get('button#submitAccount').click();

    // Logout
    cy.get('.logout').click();

    // Login with existing account
    cy.get('input[name="email"]').type("Wahabkhattak333@gmail.com");
    cy.get('input[name="passwd"]').type('Wahab@123');
    cy.get('#SubmitLogin').click(); // ← You missed this submit button
  });
});
