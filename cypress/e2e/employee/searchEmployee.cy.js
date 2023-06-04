import baseAddEmployee from "../../support/PageObject/employee/baseAddEmployee.cy.js"

describe('search employee', () => {
    it.only('success search employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

      cy.get(':nth-child(2) > .oxd-main-menu-item').click()
      cy.get(':nth-child(2) > .oxd-input').type('0221')
      cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true})
    })

    it.only('failed search employee', () => {
        const BaseAddEmployee = new baseAddEmployee()
      // login
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')
  
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get(':nth-child(2) > .oxd-input').type('XXXXX')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true})
        cy.get('.oxd-toast').should('contain.text', 'No Records Found')
      })
  })
  
  