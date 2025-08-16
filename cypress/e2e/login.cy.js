import Login2 from "../Pageobjects/login2";

describe('POM', () => {
    it.only('POM', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        const ln = new Login2();
        ln.setUsername("Admin");
        ln.setPassword("admin123");
        ln.Clickbutton();
        ln.verify("Dashboard");
    });
});
