describe('Deployments', function() {
  beforeEach(function() {
    cy.login()
  })

  it('can create deployment', function() {
    cy.enterWorkspace()
    cy.visit('/deployments/new')
    cy.checkErrors()
    cy.get('#label').type('Cypress Test Deployment')
    cy.get('#description').type(`This is a test deployment for Cypress`)
    cy
      .get('button')
      .contains('Save')
      .click()
    cy.wait(2000)
    cy.location('pathname').should('contain', '/deployments')
  })

  it('loads overview successfully', function() {
    cy.enterWorkspace()
    cy.enterDeployment()
    cy.checkErrors()
  })

  it('loads configure successfully', function() {
    cy.enterWorkspace()
    cy.enterDeployment()
    cy
      .get('a')
      .contains('Configure')
      .click()
    cy.checkErrors()
  })

  // TODO: Fix subscription network in electron
  // it('loads metrics successfully', function() {
  //   cy.enterWorkspace()
  //   cy.enterDeployment()
  //   cy
  //     .get('a')
  //     .contains('Metrics')
  //     .click()
  //   cy.checkErrors()
  // })

  it('loads logs successfully', function() {
    cy.enterWorkspace()
    cy.enterDeployment()
    cy
      .get('a')
      .contains('Logs')
      .click()
    cy.checkErrors()
  })

  it('loads alerts successfully', function() {
    cy.enterWorkspace()
    cy.enterDeployment()
    cy
      .get('a')
      .contains('Alerts')
      .click()
    cy.checkErrors()
  })

  it('loads service accounts successfully', function() {
    cy.enterWorkspace()
    cy.enterDeployment()
    cy
      .get('a')
      .contains('Service Accounts')
      .click()
    cy.checkErrors()
  })
})
