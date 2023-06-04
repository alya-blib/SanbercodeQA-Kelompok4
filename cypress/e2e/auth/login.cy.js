import baseLogin from "../../support/PageObject/auth/baseLogin.cy.js"
const loginData = require("../../fixtures/auth/dataLogin.json")

describe('Login', () => {
  const BaseLogin = new baseLogin()
    it('success login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(BaseLogin.usernameInput).type(loginData.usernameInput)
      cy.get(BaseLogin.passwordInput).type(loginData.passwordInput)
      cy.get(BaseLogin.loginButton).click()
      cy.get(BaseLogin.beVisibleImg).should(loginData.beVisible)
    })
    it('empty password login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(BaseLogin.usernameInput).type(loginData.usernameInput)
        cy.get(BaseLogin.passwordInput).clear()
        cy.get(BaseLogin.loginButton).click()
        cy.get(BaseLogin.bevisibleText).should(loginData.beVisible)
        
      })
    it('empty username login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(BaseLogin.usernameInput).clear()
        cy.get(BaseLogin.passwordInput).type(loginData.passwordInput)
        cy.get(BaseLogin.loginButton).click()
        cy.get(BaseLogin.bevisibleText).should(loginData.beVisible)
        
      })
    it('invalid username login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(BaseLogin.usernameInput).type(loginData.usernameInvalid)
        cy.get(BaseLogin.passwordInput).type(loginData.passwordInput)
        cy.get(BaseLogin.loginButton).click()
        cy.get(BaseLogin.alert).should('contain.text', loginData.invalidCredentian)
        
      })
})