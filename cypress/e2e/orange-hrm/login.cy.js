describe('Login test', () => {
    it('success login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get('.oxd-brand-banner > img').should('be.visible')
    })
    it('failed login no password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get('.oxd-button').click()
        cy.get('.oxd-input-group > .oxd-text').should('be.visible')
      })


})