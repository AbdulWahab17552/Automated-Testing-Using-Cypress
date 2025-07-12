describe('Visibility Toggle Functionality', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.waitForFlutter()
  })

  it('should show toggleable element initially', () => {
    cy.shouldBeVisible('toggleable-element')
    cy.shouldHaveText('toggle-button', 'Hide Element')
  })

  it('should hide element when toggle button is clicked', () => {
    cy.clickByTestId('toggle-button')
    cy.shouldNotBeVisible('toggleable-element')
    cy.shouldHaveText('toggle-button', 'Show Element')
  })

  it('should show element again when toggle button is clicked twice', () => {
    cy.clickByTestId('toggle-button')
    cy.shouldNotBeVisible('toggleable-element')
    cy.clickByTestId('toggle-button')
    cy.shouldBeVisible('toggleable-element')
    cy.shouldHaveText('toggle-button', 'Hide Element')
  })

  it('should maintain toggle state after other interactions', () => {
    // Hide the element
    cy.clickByTestId('toggle-button')
    cy.shouldNotBeVisible('toggleable-element')
    
    // Perform other interactions
    cy.clickByTestId('increase-button')
    cy.typeByTestId('text-input', 'Test')
    
    // Element should still be hidden
    cy.shouldNotBeVisible('toggleable-element')
    cy.shouldHaveText('toggle-button', 'Show Element')
  })

  it('should toggle multiple times correctly', () => {
    // Initial state - visible
    cy.shouldBeVisible('toggleable-element')
    
    // First toggle - hidden
    cy.clickByTestId('toggle-button')
    cy.shouldNotBeVisible('toggleable-element')
    
    // Second toggle - visible again
    cy.clickByTestId('toggle-button')
    cy.shouldBeVisible('toggleable-element')
    
    // Third toggle - hidden again
    cy.clickByTestId('toggle-button')
    cy.shouldNotBeVisible('toggleable-element')
  })
})