import baseDeteleEmployee from "../../support/PageObject/employee/baseDeteleEmployee.cy.js"
const deleteEmployeeData = require("../../fixtures/employee/dataDeleteEmployee.json")

describe('delete employee', () => {
    it('success delete employee', () => {
      const BaseDeteleEmployee = new baseDeteleEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(BaseDeteleEmployee.usernameInput).type(deleteEmployeeData.usenameLogin)
      cy.get(BaseDeteleEmployee.passwordInput).type(deleteEmployeeData.passwordInput)
      cy.get(BaseDeteleEmployee.loginButton).click()
      cy.get(BaseDeteleEmployee.dashboard).should('contain.text', deleteEmployeeData.dashboard)

      cy.get(BaseDeteleEmployee.pimButton).click()
      cy.get(BaseDeteleEmployee.deleteButton).click({force: true})
      cy.get(BaseDeteleEmployee.yesDeleteButton).click()
      cy.get(BaseDeteleEmployee.popupSuccess).should('contain.text', deleteEmployeeData.success)
    })

    it('cancel delete employee', () => {
      const BaseDeteleEmployee = new baseDeteleEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(BaseDeteleEmployee.usernameInput).type(deleteEmployeeData.usenameLogin)
      cy.get(BaseDeteleEmployee.passwordInput).type(deleteEmployeeData.passwordInput)
      cy.get(BaseDeteleEmployee.loginButton).click()
      cy.get(BaseDeteleEmployee.dashboard).should('contain.text', deleteEmployeeData.dashboard)

      cy.get(BaseDeteleEmployee.pimButton).click()
      cy.get(BaseDeteleEmployee.deleteButton).click({force: true})
      cy.get(BaseDeteleEmployee.buttonCancel).click()
    })
  })
  
  