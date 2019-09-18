describe('Signup Page', function() {
  beforeEach(function() {
    cy.visit('/')
  })

  it('Houston is accessible', function() {
    cy
      .get('#root')
      .contains(`The network's down...`)
      .should('not.exist')
  })

  it('Page is successfully loaded', function() {
    cy.get('#root').should('exist')
  })
})
