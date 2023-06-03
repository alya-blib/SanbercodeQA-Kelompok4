describe('Edit User', () => {
  it('Edit user successfully-with change password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    // Edit User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({force: true})
    cy.get('.oxd-checkbox-input > .oxd-icon').click()
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group').type('admin123')
    cy.get('.oxd-button--secondary').click()
    cy.get('#oxd-toaster_1').should('be.visible')
  })

  it('Edit user successfully-without change password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    // Edit User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({force: true})
    cy.get('.oxd-button--secondary').click()
    cy.get('#oxd-toaster_1').should('be.visible')
  })

  it('Edit user failed-empty user role', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    // Edit User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({force: true})
    cy.get('.oxd-button--secondary').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-option').eq(0).click()
    cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  })

  it('Edit user failed-empty employee name', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    // Edit User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({force: true})
    cy.get('.oxd-autocomplete-text-input > input').clear()
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  })

  it('Edit user failed-empty status user', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    // Edit User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({force: true})
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-option').eq(0).click()
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  })

  it('Edit user failed-empty username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    // Edit User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({force: true})
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  })

  it('Edit failed-empty password and confirm password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    // Edit User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({force: true})
    cy.get('.oxd-checkbox-input > .oxd-icon').click()
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
    cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group').clear()
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  })

  it('Edit user failed-invalid employee name', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    // Edit User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({force: true})
    cy.get('.oxd-autocomplete-text-input > input').clear().type('wwasd')
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  })
})