describe('Flutter Web API Integration Tests', () => {
  beforeEach(() => {
    // Load test data
    cy.fixture('test-data').as('testData')
    
    // Visit the Flutter web app
    cy.visit('/')
    cy.waitForFlutter()
  })

  it('should handle API data loading', function() {
    // Navigate to data page
    cy.get('[data-testid="data-page"]').click()
    cy.waitForFlutterNavigation()
    
    // Verify loading state
    cy.get('[data-testid="loading-indicator"]').should('be.visible')
    
    // Mock API response
    cy.intercept('GET', '/api/users', {
      statusCode: 200,
      body: this.testData.users
    }).as('getUsers')
    
    // Wait for API call
    cy.wait('@getUsers')
    
    // Verify data is displayed
    cy.get('[data-testid="user-list"]').should('be.visible')
    cy.get('[data-testid="user-item"]').should('have.length', this.testData.users.length)
  })

  it('should handle API error states', () => {
    // Mock API error
    cy.intercept('GET', '/api/users', {
      statusCode: 500,
      body: { error: 'Internal Server Error' }
    }).as('getUsersError')
    
    // Navigate to data page
    cy.get('[data-testid="data-page"]').click()
    cy.waitForFlutterNavigation()
    
    // Wait for API call
    cy.wait('@getUsersError')
    
    // Verify error message is displayed
    cy.get('[data-testid="error-message"]')
      .should('be.visible')
      .and('contain', 'Failed to load data')
  })

  it('should handle form submission with API', function() {
    // Navigate to form page
    cy.get('[data-testid="form-page"]').click()
    cy.waitForFlutterNavigation()
    
    // Mock successful form submission
    cy.intercept('POST', '/api/users', {
      statusCode: 201,
      body: { id: 4, ...this.testData.formData.registration }
    }).as('createUser')
    
    // Fill form with test data
    cy.get('[data-testid="first-name-input"]')
      .type(this.testData.formData.registration.firstName)
    
    cy.get('[data-testid="last-name-input"]')
      .type(this.testData.formData.registration.lastName)
    
    cy.get('[data-testid="email-input"]')
      .type(this.testData.formData.registration.email)
    
    // Submit form
    cy.get('[data-testid="submit-button"]').click()
    
    // Wait for API call
    cy.wait('@createUser')
    
    // Verify success message
    cy.get('[data-testid="success-message"]')
      .should('be.visible')
      .and('contain', 'User created successfully')
  })

  it('should handle authentication flow', function() {
    // Mock login API
    cy.intercept('POST', '/api/auth/login', {
      statusCode: 200,
      body: { 
        token: 'mock-jwt-token',
        user: this.testData.users[0]
      }
    }).as('login')
    
    // Navigate to login page
    cy.get('[data-testid="login-page"]').click()
    cy.waitForFlutterNavigation()
    
    // Fill login form
    cy.get('[data-testid="email-input"]')
      .type(this.testData.formData.login.email)
    
    cy.get('[data-testid="password-input"]')
      .type(this.testData.formData.login.password)
    
    // Submit login
    cy.get('[data-testid="login-button"]').click()
    
    // Wait for API call
    cy.wait('@login')
    
    // Verify redirect to dashboard
    cy.shouldBeOnFlutterRoute('/dashboard')
    cy.get('[data-testid="user-profile"]')
      .should('be.visible')
      .and('contain', this.testData.users[0].name)
  })

  it('should handle real-time updates', function() {
    // Navigate to real-time page
    cy.get('[data-testid="realtime-page"]').click()
    cy.waitForFlutterNavigation()
    
    // Mock initial data
    cy.intercept('GET', '/api/notifications', {
      statusCode: 200,
      body: []
    }).as('getNotifications')
    
    // Wait for initial load
    cy.wait('@getNotifications')
    
    // Simulate real-time update
    cy.window().then((win) => {
      // Simulate WebSocket message or server-sent event
      win.postMessage({
        type: 'notification',
        data: {
          id: 1,
          message: 'New notification received',
          timestamp: new Date().toISOString()
        }
      }, '*')
    })
    
    // Verify notification appears
    cy.get('[data-testid="notification-item"]')
      .should('be.visible')
      .and('contain', 'New notification received')
  })

  it('should handle pagination', function() {
    // Mock paginated data
    cy.intercept('GET', '/api/users?page=1&limit=10', {
      statusCode: 200,
      body: {
        data: this.testData.users.slice(0, 2),
        pagination: {
          currentPage: 1,
          totalPages: 2,
          totalItems: 3
        }
      }
    }).as('getUsersPage1')
    
    cy.intercept('GET', '/api/users?page=2&limit=10', {
      statusCode: 200,
      body: {
        data: this.testData.users.slice(2, 3),
        pagination: {
          currentPage: 2,
          totalPages: 2,
          totalItems: 3
        }
      }
    }).as('getUsersPage2')
    
    // Navigate to paginated list
    cy.get('[data-testid="paginated-list"]').click()
    cy.waitForFlutterNavigation()
    
    // Wait for first page
    cy.wait('@getUsersPage1')
    
    // Verify first page data
    cy.get('[data-testid="user-item"]').should('have.length', 2)
    
    // Navigate to next page
    cy.get('[data-testid="next-page-button"]').click()
    cy.wait('@getUsersPage2')
    
    // Verify second page data
    cy.get('[data-testid="user-item"]').should('have.length', 1)
  })

  it('should handle search with API', () => {
    // Mock search API
    cy.intercept('GET', '/api/users/search?q=john', {
      statusCode: 200,
      body: [
        {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com"
        }
      ]
    }).as('searchUsers')
    
    // Navigate to search page
    cy.get('[data-testid="search-page"]').click()
    cy.waitForFlutterNavigation()
    
    // Enter search term
    cy.get('[data-testid="search-input"]').type('john')
    
    // Trigger search
    cy.get('[data-testid="search-button"]').click()
    
    // Wait for API call
    cy.wait('@searchUsers')
    
    // Verify search results
    cy.get('[data-testid="search-results"]').should('be.visible')
    cy.get('[data-testid="search-result-item"]')
      .should('have.length', 1)
      .and('contain', 'John Doe')
  })

  it('should handle file upload', () => {
    // Mock file upload API
    cy.intercept('POST', '/api/upload', {
      statusCode: 200,
      body: {
        fileId: 'mock-file-id',
        fileName: 'test-file.txt',
        fileSize: 1024
      }
    }).as('uploadFile')
    
    // Navigate to upload page
    cy.get('[data-testid="upload-page"]').click()
    cy.waitForFlutterNavigation()
    
    // Select file to upload
    cy.get('[data-testid="file-input"]').selectFile('cypress/fixtures/test-data.json')
    
    // Upload file
    cy.get('[data-testid="upload-button"]').click()
    
    // Wait for upload
    cy.wait('@uploadFile')
    
    // Verify upload success
    cy.get('[data-testid="upload-success"]')
      .should('be.visible')
      .and('contain', 'File uploaded successfully')
  })
})