import baseAddEmployee from "../../support/PageObject/employee/baseAddEmployee.cy.js"

describe('add employee', () => {
    it('success add customer', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
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
    })

    it('empty first name add customer', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
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
    })

    it('empty last name add customer', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
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
    })

    it('empty username add customer', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
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
    })

    it('empty password add customer', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
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
    })

    it('empty confirm password add customer', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
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
    })

    it('employee more than 10 character add customer', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
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
    })

    it('Enter an existing username add customer', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
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
    })

    it('confirm password dont match add customer', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.orangehrm-header-container > .oxd-button').click()
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
    })
  })
  
  