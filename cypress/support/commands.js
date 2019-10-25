// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.overwrite('log', (subject, message) => cy.task('log', message))

Cypress.Commands.add('login', () => {
  cy.visit('/login')
  cy.get('#email').type(`test@astronomer.io`)
  cy.get('#password').type('1234567{enter}')
  cy.wait(2000)
})

Cypress.Commands.add('checkHouston', () => {
  cy.wait(2000)
  cy
    .get('#root')
    .contains(`The network's down...`)
    .should('not.exist')
})

Cypress.Commands.add('checkErrors', () => {
  cy.wait(2000)
  cy
    .get('#root')
    .contains(`DAG gone it!`)
    .should('not.exist')
})

Cypress.Commands.add('enterWorkspace', () => {
  cy.visit('/workspaces')
  cy
    .get('h3')
    .contains('Cypress Test Workspace')
    .click({ force: true })
})

Cypress.Commands.add('enterDeployment', () => {
  cy
    .get('h3')
    .contains('Cypress Test Deployment')
    .click({ force: true })
})
