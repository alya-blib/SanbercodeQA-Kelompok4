import baseAddEmployee from "../../support/PageObject/employee/baseAddEmployee.cy.js"

describe('add employee', () => {
    it('success add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
      cy.get('input[type=file]').selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('aiden')
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('arsaka')
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('mulyadi')
      cy.get('.oxd-switch-input').click()
      cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(BaseAddEmployee.generateRandomUsername())
      cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper').click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button--secondary').click()  
      cy.get('.oxd-toast').should('contain.text', 'Successfully Saved')
    })

    it('empty first name add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
      cy.get('input[type=file]').selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear()
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('arsaka')
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('mulyadi')
      cy.get('.oxd-switch-input').click()
      cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(BaseAddEmployee.generateRandomUsername())
      cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper').click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button--secondary').click()  
      cy.get('.--name-grouped-field > :nth-child(1)').should('contain.text', 'Required') 
    })

    it('empty last name add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
      cy.get('input[type=file]').selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('aiden')
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('arsaka')
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear()
      cy.get('.oxd-switch-input').click()
      cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(BaseAddEmployee.generateRandomUsername())
      cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper').click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button--secondary').click() 
      cy.get('.--name-grouped-field > :nth-child(3)').should('contain.text', 'Required')  
    })

    it('empty username add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
      cy.get('input[type=file]').selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('aiden')
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('arsaka')
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('mulyadi')
      cy.get('.oxd-switch-input').click()
      cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
      cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper').click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button--secondary').click()   
      cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group').should('contain.text', 'Required')
    })

    it('empty password add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
      cy.get('input[type=file]').selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('aiden')
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('arsaka')
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('mulyadi')
      cy.get('.oxd-switch-input').click()
      cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(BaseAddEmployee.generateRandomUsername())
      cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper').click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
      cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button--secondary').click()   
      cy.get('.user-password-cell').should('contain.text', 'Required')
      cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2)').should('contain.text', 'Passwords do not match')
    })

    it('empty confirm password add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
      cy.get('input[type=file]').selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('aiden')
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('arsaka')
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('mulyadi')
      cy.get('.oxd-switch-input').click()
      cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(BaseAddEmployee.generateRandomUsername())
      cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper').click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
      cy.get('.oxd-button--secondary').click()  
      cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2)').should('contain.text', 'Required') 
    })

    it('id employee more than 10 character add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
      cy.get('input[type=file]').selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('aiden')
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('arsaka')
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('mulyadi')
      cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type(BaseAddEmployee.generateRandomEmployeeId2())
      cy.get('.oxd-switch-input').click()
      cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(BaseAddEmployee.generateRandomUsername())
      cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper').click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button--secondary').click()   
      cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item').should('contain.text', 'Should not exceed 10 characters')
    })

    it('Enter an existing username add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
      cy.get('input[type=file]').selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('aiden')
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('arsaka')
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('mulyadi')
      cy.get('.oxd-switch-input').click()
      cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper').click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button--secondary').click()  
      cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group').should('contain.text', 'Username already exists') 
    })

    it.only('confirm password dont match add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
      cy.get('input[type=file]').selectFile('cypress/fixtures/art.jpg', {force: true})
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('aiden')
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('arsaka')
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('mulyadi')
      cy.get('.oxd-switch-input').click()
      cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(BaseAddEmployee.generateRandomUsername())
      cy.get(':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper').click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin12345')
      cy.get('.oxd-button--secondary').click()   
      cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2)').should('contain.text', 'Passwords do not match')
    })
  })
  
  