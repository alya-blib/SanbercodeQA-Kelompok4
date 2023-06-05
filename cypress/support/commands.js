import baseLogin from "./PageObject/auth/baseLogin.cy"
const loginData = require("../fixtures/auth/dataLogin.json")
const BaseLogin = new baseLogin()

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
Cypress.Commands.add('login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get(BaseLogin.usernameInput).type(loginData.usernameInput)
    cy.get(BaseLogin.passwordInput).type(loginData.passwordInput)
    cy.get(BaseLogin.loginButton).click()
    cy.get(BaseLogin.beVisibleImg).should(loginData.beVisible)
  });
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';