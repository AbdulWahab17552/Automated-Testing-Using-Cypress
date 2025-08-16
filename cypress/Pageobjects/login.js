class Login {
    setUsername(username) {
        cy.get('input[placeholder="Username"]').type(username);
    }

    setPassword(password) {
        cy.get('input[placeholder="Password"]').type(password);
    }

    Clickbutton() {
        cy.get('.oxd-button').click();
    }

    verify(expectedText) {
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', expectedText);
    }
}

export default Login;
