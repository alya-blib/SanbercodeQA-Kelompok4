class baseAddEmployee {
  generateRandomUsername() {
    var words = ["alya", "alden", "aurel", "imas", "dedi", "hari", "salsa", "nabila"];
    var symbols = ["!", "@", "#", "$", "%", "&", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  
    var randomWordIndex = Math.floor(Math.random() * words.length);
    var randomSymbolIndex = Math.floor(Math.random() * symbols.length);
  
    var username = words[randomWordIndex] + symbols[randomSymbolIndex];
  
    return username;
  }
  generateRandomEmployeeId2() {
    var words = ["alyasalsanabila", "aldenmuhammadarsaka", "aurelnailfathi", "imassitimasitoh", "dedimulyadiiii", "harisetiawannnn", "salsanbilamulyadi", "nabilamulyadialya"];
    var symbols = ["!", "@", "#", "$", "%", "&", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  
    var randomWordIndex = Math.floor(Math.random() * words.length);
    var randomSymbolIndex = Math.floor(Math.random() * symbols.length);
  
    var username = words[randomWordIndex] + symbols[randomSymbolIndex];
  
    return username;
  }
  generateRandomEmployeeId() {
    var words = ["alya", "alden", "aurel", "imas", "dedi", "hari", "salsa", "nabila"];
    var symbols = ["!", "@", "#", "$", "%", "&", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  
    var randomWordIndex = Math.floor(Math.random() * words.length);
    var randomSymbolIndex = Math.floor(Math.random() * symbols.length);
  
    var employeeId = words[randomWordIndex] + symbols[randomSymbolIndex];
  
    return employeeId;
  }
  usernameInput = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
  passwordInput = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
  loginButton = ".oxd-button"
  dashboard = ".oxd-topbar-header-breadcrumb > .oxd-text"
  pimButton = ":nth-child(2) > .oxd-main-menu-item"
  addButton = ".orangehrm-header-container > .oxd-button"
  selectFoto = "input[type=file]"
  firstNameInput = ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
  middleNameInput = ":nth-child(2) > :nth-child(2) > .oxd-input"
  lastNameInput = ":nth-child(3) > :nth-child(2) > .oxd-input"
  addSwitch = ".oxd-switch-input"
  addUsernameInput = ":nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
  statusRadio = ":nth-child(1) > :nth-child(2) > .oxd-radio-wrapper"
  addPasswordInput = ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
  addConfirmPasswordInput = ".oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
  addEmployeeSave = ".oxd-button--secondary"
  successPopup = ".oxd-toast"
  firstNameRequired = ".--name-grouped-field > :nth-child(1)"
  lastNameRequired = ".--name-grouped-field > :nth-child(3)"
  usernameRequired = ":nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group"
  passwordRequired = ".user-password-cell"
  validConfirmPassword = ".user-password-row > .oxd-grid-2 > :nth-child(2)"
  invalidEmployeeId = ":nth-child(1) > .oxd-grid-2 > .oxd-grid-item"
  employeeIdInput = ".oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input"
}

export default baseAddEmployee;
