import baseDeteleEmployee from "../../support/PageObject/employee/baseDeteleEmployee.cy.js"
const deleteEmployeeData = require("../../fixtures/employee/dataDeleteEmployee.json")
import '../../support/commands.js'

describe('delete employee', () => {
  const BaseDeteleEmployee = new baseDeteleEmployee()
    it('success delete employee', () => {
    // login
      cy.login();

      cy.get(BaseDeteleEmployee.pimButton).click()
      cy.get(BaseDeteleEmployee.deleteButton).click({force: true})
      cy.get(BaseDeteleEmployee.yesDeleteButton).click()
      cy.get(BaseDeteleEmployee.popupSuccess).should('contain.text', deleteEmployeeData.success)
    })

    it('cancel delete employee', () => {
    // login
      cy.login();
      cy.get(BaseDeteleEmployee.pimButton).click()
      cy.get(BaseDeteleEmployee.deleteButton).click({force: true})
      cy.get(BaseDeteleEmployee.buttonCancel).click()
    })
  })
  
  