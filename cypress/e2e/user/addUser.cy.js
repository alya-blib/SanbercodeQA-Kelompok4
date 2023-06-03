describe('Add User', () => {
  it('Add user successfully', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    // Add User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-option').eq(2).click()
    cy.get('.oxd-autocomplete-text-input > input').type('Peter Mac Anderson')
    cy.get('.oxd-autocomplete-option > span').click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-option').eq(1).click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('peter123')
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('peter1234567890')
    cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group').type('peter1234567890')
    cy.get('.oxd-button--secondary').click()
    cy.get('#oxd-toaster_1').should('be.visible')
  })

  it('Add user failed-empty user role', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    // Add User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.oxd-autocomplete-text-input > input').type('Peter Mac Anderson')
    cy.get('.oxd-autocomplete-option > span').click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-option').eq(1).click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('mr.peter')
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('peter1234567890')
    cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group').type('peter1234567890')
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  })

  it('Add user failed-empty employee name', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    // Add User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-option').eq(2).click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-option').eq(1).click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('mr.peter')
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('peter1234567890')
    cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group').type('peter1234567890')
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  })

  it('Add user failed-empty status user', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    // Add User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-option').eq(2).click()
    cy.get('.oxd-autocomplete-text-input > input').type('Peter Mac Anderson')
    cy.get('.oxd-autocomplete-option > span').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('mr.peter')
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('peter1234567890')
    cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group').type('peter1234567890')
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  })

  it('Add user failed-empty username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    // Add User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-option').eq(2).click()
    cy.get('.oxd-autocomplete-text-input > input').type('Peter Mac Anderson')
    cy.get('.oxd-autocomplete-option > span').click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-option').eq(1).click()
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('peter1234567890')
    cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group').type('peter1234567890')
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  })

  it('Add user failed-empty password and confirm password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    // Add User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-option').eq(2).click()
    cy.get('.oxd-autocomplete-text-input > input').type('Peter Mac Anderson')
    cy.get('.oxd-autocomplete-option > span').click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-option').eq(1).click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('mr.peter')
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  })

  it('Add user failed-invalid employee name', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')

    // Add User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-option').eq(2).click()
    cy.get('.oxd-autocomplete-text-input > input').type('wwasd')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    cy.get('.oxd-select-option').eq(1).click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('mr.peter')
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('peter1234567890')
    cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group').type('peter1234567890')
    cy.get('.oxd-button--secondary').click()
    cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  })
})