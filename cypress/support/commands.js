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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Get data fixtures path
Cypress.Commands.add('getDataFixture', () => {
    const script = Cypress.spec.relative.replaceAll('\\', '/');
    cy.task('log', `Script File Path: ${script.substring(0, script.lastIndexOf('.cy.js'))}`);
    const file = `${script.substring(0, script.lastIndexOf('.cy.js')).split('/').slice(1).join('/')}.data`;

    cy.task('log', `Fixture: ${file}`);
    return cy.fixture(file).as('data');
});