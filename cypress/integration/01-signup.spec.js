describe('Signup', function() {
  beforeEach(function() {
    cy.visit('/')
    cy.checkHouston()
  })

  it('is successfully loaded', function() {
    cy.get('#root').should('exist')
    cy.get('#email').should('exist')
    cy.get('#password').should('exist')
  })

  it('submits form successfully', function() {
    // Check if button is disabled
    cy
      .get('button')
      .contains('Sign Up')
      .should('be.disabled')

    // Signup with test credentials via Email/Pass form
    cy.get('#email').type('test@astronomer.io')

    // Check email validation
    cy
      .get('#root')
      .contains('Please enter a valid email.')
      .should('not.exist')

    cy.get('#password').type('1234567')

    // Check password validation
    cy
      .get('#root')
      .contains('Password must be at least 7 characters')
      .should('not.exist')

    // Check if button is enabled
    cy
      .get('button')
      .contains('Sign Up')
      .should('not.be.disabled')

    // Click the button
    cy
      .get('button')
      .contains('Sign Up')
      .click()

    // Check form errors
    cy
      .get('div[class*="src-instruments-forms-Field-___styles__errorMsg"]')
      .should('not.exist')

    // Check redirection
    cy.location('pathname').should('eq', '/workspaces')
  })
})
