class baseEditEmployee {
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
    editKlik = ".oxd-table-body > :nth-child(1) > .oxd-table-row"
    DlnInput = ":nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    LedInput = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
    SinnInput = ":nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    nationalityKlik = ":nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    indonesiaSelect = ":nth-child(84)"
    msKlik = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    singleSelect = ".oxd-select-dropdown > :nth-child(2)"
    dobKlik = ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input"
    genderRadio = ":nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label"
    saveButton1 = ":nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button"
    popupSuccess = ".oxd-toast"
    btKlik = ".orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    oSelect = ".oxd-select-dropdown > :nth-child(6)"
    saveButton2 = ".orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button"
    showButtonAttacment = ".orangehrm-action-header > .oxd-button"
    selectFile = "input[type=file]"
    commentInput = ".oxd-textarea"
    saveButton3 = ".orangehrm-attachment > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary"
    firstNameInput = ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
    requiredInfo = ".--name-grouped-field > :nth-child(1)"
    lastnameInput = ":nth-child(3) > :nth-child(2) > .oxd-input"
    lastNameRequired = ".--name-grouped-field > :nth-child(3)"
    employeeIdInput = ":nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    employeeIdMore = ":nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group"
    dlnMore = ":nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group"
    sinnMore = ".oxd-form > :nth-child(3) > :nth-child(3) > :nth-child(2)"
  }
  
  export default baseEditEmployee;
  