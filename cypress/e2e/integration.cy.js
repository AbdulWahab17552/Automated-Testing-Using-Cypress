describe('Integration Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.waitForFlutter()
  })

  it('should handle complex user interactions', () => {
    // Test counter functionality
    cy.clickByTestId('increase-button')
    cy.clickByTestId('increase-button')
    cy.shouldHaveText('counter-value', '2')
    
    // Test text input
    cy.typeByTestId('text-input', 'Integration Test')
    cy.shouldHaveText('input-display', 'You typed: Integration Test')
    
    // Test visibility toggle
    cy.clickByTestId('toggle-button')
    cy.shouldNotBeVisible('toggleable-element')
    
    // Verify all states are maintained
    cy.shouldHaveText('counter-value', '2')
    cy.shouldHaveText('input-display', 'You typed: Integration Test')
    cy.shouldNotBeVisible('toggleable-element')
  })

  it('should handle rapid interactions', () => {
    // Rapid counter clicks
    for (let i = 0; i < 5; i++) {
      cy.clickByTestId('increase-button')
    }
    cy.shouldHaveText('counter-value', '5')
    
    // Rapid text typing
    cy.typeByTestId('text-input', 'Rapid typing test')
    cy.shouldHaveText('input-display', 'You typed: Rapid typing test')
    
    // Rapid toggle clicks
    cy.clickByTestId('toggle-button')
    cy.clickByTestId('toggle-button')
    cy.clickByTestId('toggle-button')
    cy.shouldNotBeVisible('toggleable-element')
  })

  it('should maintain app state across page interactions', () => {
    // Set up initial state
    cy.clickByTestId('increase-button')
    cy.typeByTestId('text-input', 'State Test')
    cy.clickByTestId('toggle-button')
    
    // Verify state
    cy.shouldHaveText('counter-value', '1')
    cy.shouldHaveText('input-display', 'You typed: State Test')
    cy.shouldNotBeVisible('toggleable-element')
    
    // Interact with floating action button
    cy.clickByTestId('floating-action-button')
    cy.shouldHaveText('counter-value', '2')
    
    // Verify other states are maintained
    cy.shouldHaveText('input-display', 'You typed: State Test')
    cy.shouldNotBeVisible('toggleable-element')
  })

  it('should handle edge cases', () => {
    // Test with empty input
    cy.typeByTestId('text-input', '')
    cy.shouldHaveText('input-display', 'You typed: ')
    
    // Test counter going negative
    cy.clickByTestId('decrease-button')
    cy.clickByTestId('decrease-button')
    cy.shouldHaveText('counter-value', '-2')
    
    // Test toggle multiple times
    cy.clickByTestId('toggle-button')
    cy.clickByTestId('toggle-button')
    cy.clickByTestId('toggle-button')
    cy.shouldNotBeVisible('toggleable-element')
  })
})