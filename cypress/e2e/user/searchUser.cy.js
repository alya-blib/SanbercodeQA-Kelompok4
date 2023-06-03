describe('template spec', () => {
  it('Search user successfully-fill all field and input valid data', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')
  
    // Search User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-input').type('Jacqueline.White')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-option').eq(2).click()
    cy.get('.oxd-autocomplete-text-input > input').type('Jacqueline')
    cy.get('.oxd-autocomplete-option > span').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-option').eq(1).click()
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div').contains('Jacqueline White').should('be.visible')
  })

  it('Search user successfully-empty username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')
  
    // Search User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-input').clear()
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-option').eq(2).click()
    cy.get('.oxd-autocomplete-text-input > input').type('Jacqueline')
    cy.get('.oxd-autocomplete-option > span').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-option').eq(1).click()
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div').contains('Jacqueline White').should('be.visible')
  })

  it('Search user successfully-empty user role', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')
  
    // Search User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-input').type('Jacqueline.White')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-option').eq(0).click()
    cy.get('.oxd-autocomplete-text-input > input').type('Jacqueline')
    cy.get('.oxd-autocomplete-option > span').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-option').eq(1).click()
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div').contains('Jacqueline White').should('be.visible')
  })

  it('Search user successfully-empty employee name', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')
  
    // Search User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-input').type('Jacqueline.White')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-option').eq(2).click()
    cy.get('.oxd-autocomplete-text-input > input').clear()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div').contains('Jacqueline White').should('be.visible')
  })

  it('Search user successfully-empty status user', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')
  
    // Search User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-input').type('Jacqueline.White')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-option').eq(2).click()
    cy.get('.oxd-autocomplete-text-input > input').type('Jacqueline')
    cy.get('.oxd-autocomplete-option > span').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-option').eq(0).click()
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div').contains('Jacqueline White').should('be.visible')
  })

  it('Search user successfully-fill all field and input valid data', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')
  
    // Search User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-input').clear()
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-option').eq(0).click()
    cy.get('.oxd-autocomplete-text-input > input').clear()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-option').eq(0).click()
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.get('.oxd-table-body > :nth-child(1) > .oxd-table-row').should('be.visible')
  })

  it('Search user failed-invalid username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')
  
    // Search User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-input').type('Mr.White')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-option').eq(2).click()
    cy.get('.oxd-autocomplete-text-input > input').type('Jacqueline')
    cy.get('.oxd-autocomplete-option > span').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-option').eq(1).click()
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.get('#oxd-toaster_1').should('be.visible')
  })

  it('Search user failed-invalid employee name', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    // Login
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain.text', 'Dashboard')
  
    // Search User
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(2) > .oxd-input').type('Jacqueline.White')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-option').eq(2).click()
    cy.get('.oxd-autocomplete-text-input > input').type('Mr White')
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-option').eq(1).click()
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force: true})
    cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  })
})