
describe("Maxina Admin Panel", () => {
  it('Login Screen', () => {
    cy.visit("https://maxina.exafy.io/auth/login")
    cy.get('flutter-view').type('abdul.wahab@cortechsols.com')


  })
})