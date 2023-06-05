import { add } from "lodash"
import baseAddEmployee from "../../support/PageObject/employee/baseAddEmployee.cy.js"
const addEmployeeData = require("../../fixtures/employee/dataAddEmployee.json")
import '../../support/commands.js'

describe('add employee', () => {
  const BaseAddEmployee = new baseAddEmployee()
    it('success add employee', () => {
    // login
      cy.login();

      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile(addEmployeeData.file, {force: true})
      cy.get(BaseAddEmployee.employeeIdInput).clear().type(BaseAddEmployee.generateRandomEmployeeId())
      cy.get(BaseAddEmployee.firstNameInput).type(addEmployeeData.firstNameInput)
      cy.get(BaseAddEmployee.middleNameInput).type(addEmployeeData.middleNameInput)
      cy.get(BaseAddEmployee.lastNameInput).type(addEmployeeData.lastNameInput)
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).type(BaseAddEmployee.generateRandomUsername())
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).type(addEmployeeData.passwordInput)
      cy.get(BaseAddEmployee.addConfirmPasswordInput).type(addEmployeeData.passwordInput)
      cy.get(BaseAddEmployee.addEmployeeSave).click()  
      cy.get(BaseAddEmployee.successPopup).should('contain.text', addEmployeeData.success)
    })

    it('empty first name add employee', () => {
    // login
      cy.login();

      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile(addEmployeeData.file, {force: true})
      cy.get(BaseAddEmployee.firstNameInput).clear()
      cy.get(BaseAddEmployee.middleNameInput).type(addEmployeeData.middleNameInput)
      cy.get(BaseAddEmployee.lastNameInput).type(addEmployeeData.lastNameInput)
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).type(BaseAddEmployee.generateRandomUsername())
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).type(addEmployeeData.passwordInput)
      cy.get(BaseAddEmployee.addConfirmPasswordInput).type(addEmployeeData.passwordInput)
      cy.get(BaseAddEmployee.addEmployeeSave).click()  
      cy.get(BaseAddEmployee.firstNameRequired).should('contain.text', addEmployeeData.required) 
    })

    it('empty last name add employee', () => {
    // login
      cy.login();
      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile(addEmployeeData.file, {force: true})
      cy.get(BaseAddEmployee.firstNameInput).type(addEmployeeData.firstNameInput)
      cy.get(BaseAddEmployee.middleNameInput).type(addEmployeeData.middleNameInput)
      cy.get(BaseAddEmployee.lastNameInput).clear()
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).type(BaseAddEmployee.generateRandomUsername())
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).type(addEmployeeData.passwordInput)
      cy.get(BaseAddEmployee.addConfirmPasswordInput).type(addEmployeeData.passwordInput)
      cy.get(BaseAddEmployee.addEmployeeSave).click() 
      cy.get(BaseAddEmployee.lastNameRequired).should('contain.text', addEmployeeData.required)  
    })

    it('empty username add employee', () => {
    // login
      cy.login();

      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile(addEmployeeData.file, {force: true})
      cy.get(BaseAddEmployee.firstNameInput).type(addEmployeeData.firstNameInput)
      cy.get(BaseAddEmployee.middleNameInput).type(addEmployeeData.middleNameInput)
      cy.get(BaseAddEmployee.lastNameInput).type(addEmployeeData.lastNameInput)
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).clear()
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).type(addEmployeeData.passwordInput)
      cy.get(BaseAddEmployee.addConfirmPasswordInput).type(addEmployeeData.passwordInput)
      cy.get(BaseAddEmployee.addEmployeeSave).click()   
      cy.get(BaseAddEmployee.usernameRequired).should('contain.text', addEmployeeData.required)
    })

    it('empty password add employee', () => {
    // login
      cy.login();

      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile(addEmployeeData.file, {force: true})
      cy.get(BaseAddEmployee.firstNameInput).type(addEmployeeData.firstNameInput)
      cy.get(BaseAddEmployee.middleNameInput).type(addEmployeeData.middleNameInput)
      cy.get(BaseAddEmployee.lastNameInput).type(addEmployeeData.lastNameInput)
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).type(BaseAddEmployee.generateRandomUsername())
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).clear()
      cy.get(BaseAddEmployee.addConfirmPasswordInput).type(addEmployeeData.passwordInput)
      cy.get(BaseAddEmployee.addEmployeeSave).click()   
      cy.get(BaseAddEmployee.passwordRequired).should('contain.text', addEmployeeData.required)
      cy.get(BaseAddEmployee.validConfirmPassword).should('contain.text', addEmployeeData.passwordDontMatch)
    })

    it('empty confirm password add employee', () => {
    // login
      cy.login();

      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile(addEmployeeData.file, {force: true})
      cy.get(BaseAddEmployee.firstNameInput).type(addEmployeeData.firstNameInput)
      cy.get(BaseAddEmployee.middleNameInput).type(addEmployeeData.middleNameInput)
      cy.get(BaseAddEmployee.lastNameInput).type(addEmployeeData.lastNameInput)
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).type(BaseAddEmployee.generateRandomUsername())
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).type(addEmployeeData.passwordInput)
      cy.get(BaseAddEmployee.addConfirmPasswordInput).clear()
      cy.get(BaseAddEmployee.addEmployeeSave).click()  
      cy.get(BaseAddEmployee.validConfirmPassword).should('contain.text', addEmployeeData.required) 
    })

    it('id employee more than 10 character add employee', () => {
    // login
      cy.login();

      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile(addEmployeeData.file, {force: true})
      cy.get(BaseAddEmployee.firstNameInput).type(addEmployeeData.firstNameInput)
      cy.get(BaseAddEmployee.middleNameInput).type(addEmployeeData.middleNameInput)
      cy.get(BaseAddEmployee.lastNameInput).type(addEmployeeData.lastNameInput)
      cy.get(BaseAddEmployee.employeeIdInput).type(BaseAddEmployee.generateRandomEmployeeId2())
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).type(BaseAddEmployee.generateRandomUsername())
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).type(addEmployeeData.passwordInput)
      cy.get(BaseAddEmployee.addConfirmPasswordInput).type(addEmployeeData.passwordInput)
      cy.get(BaseAddEmployee.addEmployeeSave).click()   
      cy.get(BaseAddEmployee.invalidEmployeeId).should('contain.text', addEmployeeData.moreCharacter)
    })

    it('Enter an existing username add employee', () => {
    // login
      cy.login();

      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile(addEmployeeData.file, {force: true})
      cy.get(BaseAddEmployee.firstNameInput).type(addEmployeeData.firstNameInput)
      cy.get(BaseAddEmployee.middleNameInput).type(addEmployeeData.middleNameInput)
      cy.get(BaseAddEmployee.lastNameInput).type(addEmployeeData.lastNameInput)
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).type(addEmployeeData.usenameInput)
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).type(addEmployeeData.passwordInput)
      cy.get(BaseAddEmployee.addConfirmPasswordInput).type(addEmployeeData.passwordInput)
      cy.get(BaseAddEmployee.addEmployeeSave).click()  
      cy.get(BaseAddEmployee.usernameRequired).should('contain.text', addEmployeeData.usernameAlready) 
    })

    it('confirm password dont match add employee', () => {
      const BaseAddEmployee = new baseAddEmployee()
    // login
      cy.login();

      cy.get(BaseAddEmployee.pimButton).click()
      cy.get(BaseAddEmployee.addButton).click()
      cy.get(BaseAddEmployee.selectFoto).selectFile(addEmployeeData.file, {force: true})
      cy.get(BaseAddEmployee.firstNameInput).type(addEmployeeData.firstNameInput)
      cy.get(BaseAddEmployee.middleNameInput).type(addEmployeeData.middleNameInput)
      cy.get(BaseAddEmployee.lastNameInput).type(addEmployeeData.lastNameInput)
      cy.get(BaseAddEmployee.addSwitch).click()
      cy.get(BaseAddEmployee.addUsernameInput).type(BaseAddEmployee.generateRandomUsername())
      cy.get(BaseAddEmployee.statusRadio).click();
      // cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label').click();
      cy.get(BaseAddEmployee.addPasswordInput).type(addEmployeeData.passwordInput)
      cy.get(BaseAddEmployee.addConfirmPasswordInput).type(addEmployeeData.confirmPassword)
      cy.get(BaseAddEmployee.addEmployeeSave).click()   
      cy.get(BaseAddEmployee.validConfirmPassword).should('contain.text', addEmployeeData.passwordDontMatch)
    })
  })
  
  