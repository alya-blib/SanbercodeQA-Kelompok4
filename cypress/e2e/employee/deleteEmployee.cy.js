import baseDeteleEmployee from "../../support/PageObject/employee/baseDeteleEmployee.cy.js"

describe('delete employee', () => {
    it('success delete employee', () => {
      const BaseDeteleEmployee = new baseDeteleEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(BaseDeteleEmployee.usernameInput).type('admin')
      cy.get(BaseDeteleEmployee.passwordInput).type('admin123')
      cy.get(BaseDeteleEmployee.loginButton).click()
      cy.get(BaseDeteleEmployee.dashboard).should('contain.text', 'Dashboard')

      cy.get(BaseDeteleEmployee.pimButton).click()
      cy.get(BaseDeteleEmployee.deleteButton).click({force: true})
      cy.get(BaseDeteleEmployee.yesDeleteButton).click()
      cy.get(BaseDeteleEmployee.popupSuccess).should('contain.text', 'Successfully Deleted')
    })

    it('cancel delete employee', () => {
      const BaseDeteleEmployee = new baseDeteleEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(BaseDeteleEmployee.usernameInput).type('admin')
      cy.get(BaseDeteleEmployee.passwordInput).type('admin123')
      cy.get(BaseDeteleEmployee.loginButton).click()
      cy.get(BaseDeteleEmployee.dashboard).should('contain.text', 'Dashboard')

      cy.get(BaseDeteleEmployee.pimButton).click()
      cy.get(BaseDeteleEmployee.deleteButton).click({force: true})
      cy.get(BaseDeteleEmployee.buttonCancel).click()
    })
  })
  
  