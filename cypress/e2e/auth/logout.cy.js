import { add } from "lodash"
import baseLogout from "../../support/PageObject/auth/baseLogout.cy.js"
const logoutData = require("../../fixtures/auth/dataLogout.json")

describe('add employee', () => {
    it('logout', () => {
      const BaseLogout = new baseLogout()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(BaseLogout.usernameInput).type(logoutData.usenameInput)
      cy.get(BaseLogout.passwordInput).type(logoutData.passwordInput)
      cy.get(BaseLogout.loginButton).click()
      cy.get(BaseLogout.dashboard).should('contain.text', logoutData.dashboard)
      cy.get(BaseLogout.profilButton).click()
      cy.get(BaseLogout.logoutButton).click()

    })
   
  })
  
  