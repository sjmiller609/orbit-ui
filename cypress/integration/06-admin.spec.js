describe('Admin', function() {
  beforeEach(function() {
    cy.login()
  })

  it('loads successfully', function() {
    cy.visit('/admin')
    cy.checkErrors()
  })

  it('loads deployments successfully', function() {
    cy.visit('/admin/deployments')
    cy.checkErrors()
  })
})
