import { add } from "lodash"
import baseLogout from "../../support/PageObject/auth/baseLogout.cy.js"
// const logoutData = require("../../fixtures/auth/dataLogout.json")
import '../../support/commands.js'

describe('add employee', () => {
    it('logout', () => {
      const BaseLogout = new baseLogout()
    // login
      cy.login();
      cy.get(BaseLogout.profilButton).click()
      cy.get(BaseLogout.logoutButton).click()
    })
   
  })
  
  