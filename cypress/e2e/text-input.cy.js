describe('Text Input Functionality', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.waitForFlutter()
  })

  it('should display empty input initially', () => {
    cy.getByTestId('text-input').should('have.value', '')
    cy.shouldHaveText('input-display', 'You typed: ')
  })

  it('should update display when text is typed', () => {
    const testText = 'Hello Cypress!'
    cy.typeByTestId('text-input', testText)
    cy.shouldHaveText('input-display', `You typed: ${testText}`)
  })

  it('should handle special characters', () => {
    const specialText = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    cy.typeByTestId('text-input', specialText)
    cy.shouldHaveText('input-display', `You typed: ${specialText}`)
  })

  it('should handle numbers', () => {
    const numbers = '1234567890'
    cy.typeByTestId('text-input', numbers)
    cy.shouldHaveText('input-display', `You typed: ${numbers}`)
  })

  it('should handle long text', () => {
    const longText = 'This is a very long text that should be handled properly by the input field'
    cy.typeByTestId('text-input', longText)
    cy.shouldHaveText('input-display', `You typed: ${longText}`)
  })

  it('should clear input when backspace is used', () => {
    cy.typeByTestId('text-input', 'Test')
    cy.getByTestId('text-input').clear()
    cy.shouldHaveText('input-display', 'You typed: ')
  })
})