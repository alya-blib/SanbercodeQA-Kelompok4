import baseAddEmployee from "../../support/PageObject/employee/baseAddEmployee.cy.js"

describe('add employee', () => {
    it.only('success add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(BaseAddEmployee.usernameInput).type('admin')
      cy.get(BaseAddEmployee.passwordInput).type('admin123')
      cy.get(BaseAddEmployee.loginButton).click()
      cy.get(BaseAddEmployee.dashboard).should('contain.text', 'Dashboard')

      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get(BaseAddEmployee.employeeIdInput).type(BaseAddEmployee.generateRandomEmployeeId())
      cy.get(BaseAddEmployee.firstNameInput).type('aiden')
      cy.get(BaseAddEmployee.middleNameInput).type('arsaka')
      cy.get(BaseAddEmployee.lastNameInput).type('mulyadi')
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).type(BaseAddEmployee.generateRandomUsername())
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).type('admin123')
      cy.get(BaseAddEmployee.addConfirmPasswordInput).type('admin123')
      cy.get(BaseAddEmployee.addEmployeeSave).click()  
      cy.get(BaseAddEmployee.successPopup).should('contain.text', 'Successfully Saved')
    })

    it('empty first name add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(BaseAddEmployee.usernameInput).type('admin')
      cy.get(BaseAddEmployee.passwordInput).type('admin123')
      cy.get(BaseAddEmployee.loginButton).click()
      cy.get(BaseAddEmployee.dashboard).should('contain.text', 'Dashboard')

      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get(BaseAddEmployee.firstNameInput).clear()
      cy.get(BaseAddEmployee.middleNameInput).type('arsaka')
      cy.get(BaseAddEmployee.lastNameInput).type('mulyadi')
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).type(BaseAddEmployee.generateRandomUsername())
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).type('admin123')
      cy.get(BaseAddEmployee.addConfirmPasswordInput).type('admin123')
      cy.get(BaseAddEmployee.addEmployeeSave).click()  
      cy.get(BaseAddEmployee.firstNameRequired).should('contain.text', 'Required') 
    })

    it('empty last name add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(BaseAddEmployee.usernameInput).type('admin')
      cy.get(BaseAddEmployee.passwordInput).type('admin123')
      cy.get(BaseAddEmployee.loginButton).click()
      cy.get(BaseAddEmployee.dashboard).should('contain.text', 'Dashboard')

      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get(BaseAddEmployee.firstNameInput).type('aiden')
      cy.get(BaseAddEmployee.middleNameInput).type('arsaka')
      cy.get(BaseAddEmployee.lastNameInput).clear()
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).type(BaseAddEmployee.generateRandomUsername())
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).type('admin123')
      cy.get(BaseAddEmployee.addConfirmPasswordInput).type('admin123')
      cy.get(BaseAddEmployee.addEmployeeSave).click() 
      cy.get(BaseAddEmployee.lastNameRequired).should('contain.text', 'Required')  
    })

    it('empty username add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(BaseAddEmployee.usernameInput).type('admin')
      cy.get(BaseAddEmployee.passwordInput).type('admin123')
      cy.get(BaseAddEmployee.loginButton).click()
      cy.get(BaseAddEmployee.dashboard).should('contain.text', 'Dashboard')

      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get(BaseAddEmployee.firstNameInput).type('aiden')
      cy.get(BaseAddEmployee.middleNameInput).type('arsaka')
      cy.get(BaseAddEmployee.lastNameInput).type('mulyadi')
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).clear()
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).type('admin123')
      cy.get(BaseAddEmployee.addConfirmPasswordInput).type('admin123')
      cy.get(BaseAddEmployee.addEmployeeSave).click()   
      cy.get(BaseAddEmployee.usernameRequired).should('contain.text', 'Required')
    })

    it('empty password add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(BaseAddEmployee.usernameInput).type('admin')
      cy.get(BaseAddEmployee.passwordInput).type('admin123')
      cy.get(BaseAddEmployee.loginButton).click()
      cy.get(BaseAddEmployee.dashboard).should('contain.text', 'Dashboard')

      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get(BaseAddEmployee.firstNameInput).type('aiden')
      cy.get(BaseAddEmployee.middleNameInput).type('arsaka')
      cy.get(BaseAddEmployee.lastNameInput).type('mulyadi')
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).type(BaseAddEmployee.generateRandomUsername())
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).clear()
      cy.get(BaseAddEmployee.addConfirmPasswordInput).type('admin123')
      cy.get(BaseAddEmployee.addEmployeeSave).click()   
      cy.get(BaseAddEmployee.passwordRequired).should('contain.text', 'Required')
      cy.get(BaseAddEmployee.validConfirmPassword).should('contain.text', 'Passwords do not match')
    })

    it('empty confirm password add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(BaseAddEmployee.usernameInput).type('admin')
      cy.get(BaseAddEmployee.passwordInput).type('admin123')
      cy.get(BaseAddEmployee.loginButton).click()
      cy.get(BaseAddEmployee.dashboard).should('contain.text', 'Dashboard')

      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get(BaseAddEmployee.firstNameInput).type('aiden')
      cy.get(BaseAddEmployee.middleNameInput).type('arsaka')
      cy.get(BaseAddEmployee.lastNameInput).type('mulyadi')
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).type(BaseAddEmployee.generateRandomUsername())
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).type('admin123')
      cy.get(BaseAddEmployee.addConfirmPasswordInput).clear()
      cy.get(BaseAddEmployee.addEmployeeSave).click()  
      cy.get(BaseAddEmployee.validConfirmPassword).should('contain.text', 'Required') 
    })

    it('id employee more than 10 character add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(BaseAddEmployee.usernameInput).type('admin')
      cy.get(BaseAddEmployee.passwordInput).type('admin123')
      cy.get(BaseAddEmployee.loginButton).click()
      cy.get(BaseAddEmployee.dashboard).should('contain.text', 'Dashboard')

      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get(BaseAddEmployee.firstNameInput).type('aiden')
      cy.get(BaseAddEmployee.middleNameInput).type('arsaka')
      cy.get(BaseAddEmployee.lastNameInput).type('mulyadi')
      cy.get(BaseAddEmployee.employeeIdInput).type(BaseAddEmployee.generateRandomEmployeeId2())
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).type(BaseAddEmployee.generateRandomUsername())
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).type('admin123')
      cy.get(BaseAddEmployee.addConfirmPasswordInput).type('admin123')
      cy.get(BaseAddEmployee.addEmployeeSave).click()   
      cy.get(BaseAddEmployee.invalidEmployeeId).should('contain.text', 'Should not exceed 10 characters')
    })

    it('Enter an existing username add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(BaseAddEmployee.usernameInput).type('admin')
      cy.get(BaseAddEmployee.passwordInput).type('admin123')
      cy.get(BaseAddEmployee.loginButton).click()
      cy.get(BaseAddEmployee.dashboard).should('contain.text', 'Dashboard')

      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get(BaseAddEmployee.firstNameInput).type('aiden')
      cy.get(BaseAddEmployee.middleNameInput).type('arsaka')
      cy.get(BaseAddEmployee.lastNameInput).type('mulyadi')
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).type('admin')
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).type('admin123')
      cy.get(BaseAddEmployee.addConfirmPasswordInput).type('admin123')
      cy.get(BaseAddEmployee.addEmployeeSave).click()  
      cy.get(BaseAddEmployee.usernameRequired).should('contain.text', 'Username already exists') 
    })

    it('confirm password dont match add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(BaseAddEmployee.usernameInput).type('admin')
      cy.get(BaseAddEmployee.passwordInput).type('admin123')
      cy.get(BaseAddEmployee.loginButton).click()
      cy.get(BaseAddEmployee.dashboard).should('contain.text', 'Dashboard')

      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get(BaseAddEmployee.firstNameInput).type('aiden')
      cy.get(BaseAddEmployee.middleNameInput).type('arsaka')
      cy.get(BaseAddEmployee.lastNameInput).type('mulyadi')
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).type(BaseAddEmployee.generateRandomUsername())
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).type('admin123')
      cy.get(BaseAddEmployee.addConfirmPasswordInput).type('admin12345')
      cy.get(BaseAddEmployee.addEmployeeSave).click()   
      cy.get(BaseAddEmployee.validConfirmPassword).should('contain.text', 'Passwords do not match')
    })
  })
  
  