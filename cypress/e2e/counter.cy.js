describe('Counter Functionality', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.waitForFlutter()
  })

  it('should display initial counter value of 0', () => {
    cy.shouldHaveText('counter-value', '0')
  })

  it('should increment counter when increase button is clicked', () => {
    cy.clickByTestId('increase-button')
    cy.shouldHaveText('counter-value', '1')
  })

  it('should decrement counter when decrease button is clicked', () => {
    cy.clickByTestId('decrease-button')
    cy.shouldHaveText('counter-value', '-1')
  })

  it('should increment counter multiple times', () => {
    cy.clickByTestId('increase-button')
    cy.clickByTestId('increase-button')
    cy.clickByTestId('increase-button')
    cy.shouldHaveText('counter-value', '3')
  })

  it('should increment counter using floating action button', () => {
    cy.clickByTestId('floating-action-button')
    cy.shouldHaveText('counter-value', '1')
  })

  it('should handle multiple increment and decrement operations', () => {
    cy.clickByTestId('increase-button')
    cy.clickByTestId('increase-button')
    cy.clickByTestId('decrease-button')
    cy.clickByTestId('increase-button')
    cy.shouldHaveText('counter-value', '2')
  })
})