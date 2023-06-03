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
}

export default baseAddEmployee;
