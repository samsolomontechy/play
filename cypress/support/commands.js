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
/// <reference types="cypress" />

/**
 * Custom login command
 * @param {string} usernameLocator - Selector for username input
 * @param {string} username - Username text
 * @param {string} passwordLocator - Selector for password input
 * @param {string} password - Password text
 * @param {string} submitLocator - Selector for submit button
 */
Cypress.Commands.add('login', (usernameLocator, username, passwordLocator, password, submitLocator) => {
  cy.get(usernameLocator).type(username);
  cy.get(passwordLocator).type(password);
  cy.get(submitLocator).click();
});

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