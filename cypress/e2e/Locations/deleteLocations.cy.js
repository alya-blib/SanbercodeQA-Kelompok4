import baseAddEmployee from "../../support/PageObject/employee/baseAddEmployee.cy.js"

describe('Delete Locations', () => {

    it('cancel delete locations', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
      cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1)').click()
      cy.get('.oxd-button--text').click()
    }) 
    
    it('success delete locations', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
      cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1)').click()
      cy.get('.oxd-button--label-danger').click()
      cy.get('.oxd-toast').should('contain.text', 'Successfully Deleted')
    })
   
  })
  
  