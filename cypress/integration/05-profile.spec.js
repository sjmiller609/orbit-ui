describe('Profile', function() {
  beforeEach(function() {
    cy.login()
  })

  it('loads successfully', function() {
    cy.visit('/profile')
    cy.checkErrors()
  })
})
