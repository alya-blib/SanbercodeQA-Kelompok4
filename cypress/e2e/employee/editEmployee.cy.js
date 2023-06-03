import baseAddEmployee from "../../support/PageObject/employee/baseAddEmployee.cy.js"

describe('add employee', () => {

    it('success edit employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('308553')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2025-06-06').click()
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('212259')
      cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get(':nth-child(84)').click()
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(2)').click()
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2000-08-08').click({ force: true })
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click({ force: true })
      cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()

      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(6)').click()
      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()

    //   cy.get('.orangehrm-action-header > .oxd-button').click()
    })

    it('empty first name edit employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
      cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear()
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('308553')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2025-06-06').click()
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('212259')
      cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get(':nth-child(84)').click()
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(2)').click()
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2000-08-08').click({ force: true })
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click({ force: true })
      cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()

      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(6)').click()
      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()
        
    //   cy.get('.orangehrm-action-header > .oxd-button').click()
    })

    it('empty last name edit employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear()
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('308553')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2025-06-06').click()
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('212259')
      cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get(':nth-child(84)').click()
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(2)').click()
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2000-08-08').click({ force: true })
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click({ force: true })
      cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()

      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(6)').click()
      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()

    //   cy.get('.orangehrm-action-header > .oxd-button').click()
    })

    it('employee id more than 10 edit employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
      cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(BaseAddEmployee.generateRandomEmployeeId2())
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('308553')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2025-06-06').click()
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('212259')
      cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get(':nth-child(84)').click()
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(2)').click()
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2000-08-08').click({ force: true })
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click({ force: true })
      cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()

      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(6)').click()
      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()

    //   cy.get('.orangehrm-action-header > .oxd-button').click()
    })
    it('License Expiry Date out of format edit employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('308553')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('06-2026-06').click()
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('212259')
      cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get(':nth-child(84)').click()
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(2)').click()
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2000-08-08').click({ force: true })
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click({ force: true })
      cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()

      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(6)').click()
      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()

    //   cy.get('.orangehrm-action-header > .oxd-button').click()
    })
    it('Date of Birth out of format edit employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('308553')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2026-06-06').click()
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('212259')
      cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get(':nth-child(84)').click()
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(2)').click()
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('08-2000-08').click({ force: true })
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click({ force: true })
      cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()

      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(6)').click()
      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()

    //   cy.get('.orangehrm-action-header > .oxd-button').click()
    })
    it('Drivers License Number more than 30 character edit employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('308533333333333333333333333333333')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2026-06-06').click()
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('212259')
      cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get(':nth-child(84)').click()
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(2)').click()
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2000-08-08').click({ force: true })
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click({ force: true })
      cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()

      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(6)').click()
      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()

    //   cy.get('.orangehrm-action-header > .oxd-button').click()
    })
    it('SIN Number more than 30 character edit employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').click()
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('3085333')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2026-06-06').click()
      cy.get(':nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('212259999999999999999999999999999')
      cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get(':nth-child(84)').click()
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(2)').click()
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2000-08-08').click({ force: true })
      cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click({ force: true })
      cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()

      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.get('.oxd-select-dropdown > :nth-child(6)').click()
      cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()

    //   cy.get('.orangehrm-action-header > .oxd-button').click()
    })
  })
  
  