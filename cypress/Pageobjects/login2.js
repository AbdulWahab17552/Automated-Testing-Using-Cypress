class Login2 {
    textusername='input[placeholder="Username"]';
    textpassword='input[placeholder="Password"]';
    btnClickbutton='.oxd-button';
    textexpectedText='.oxd-topbar-header-breadcrumb > .oxd-text'
    setUsername(username) {
        cy.get(this.textusername).type(username);
    }

    setPassword(password) {
        cy.get(this.textpassword).type(password);
    }

    Clickbutton() {
        cy.get(this.btnClickbutton).click();
    }

    verify(expectedText) {
        cy.get(this.textexpectedText).should('have.text', expectedText);
    }
}

export default Login2;
