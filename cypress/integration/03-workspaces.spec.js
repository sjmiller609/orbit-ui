describe('Workspaces', function() {
  beforeEach(function() {
    cy.login()
  })

  it('is successfully loaded', function() {
    cy.location('pathname').should('eq', '/workspaces')
    cy.checkErrors()
  })

  it('can create workspace', function() {
    cy.visit('/workspaces/new')
    cy.get('#label').type('Cypress Test Workspace')
    cy.get('#description').type('This is a test workspace for Cypress')
    cy
      .get('button')
      .contains('Create Workspace')
      .click()
    cy.wait(2000)
    cy.location('pathname').should('contain', '/deployments')
  })

  it('loads deployments successfully', function() {
    cy.enterWorkspace()
    cy.checkErrors()
  })

  it('loads users successfuly', function() {
    cy.enterWorkspace()
    cy.visit('/users')
    cy.checkErrors()
  })

  it('loads service accounts successfuly', function() {
    cy.enterWorkspace()
    cy.visit('/service-accounts')
    cy.checkErrors()
  })

  it('loads settings successfuly', function() {
    cy.enterWorkspace()
    cy.visit('/settings')
    cy.checkErrors()
  })
})
