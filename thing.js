module.exports = {
  sayHello: function() {
    return "hello";
  },
  hasAllUniqueCharacters: function(str) {
    var map = {};
    for (var i = 0; i<str.length; i++) {
      if (map[str[i]] !== undefined) {
        return false;
      }
      map[str[i]] = true;
    }
    return true;
  },
  // without "additional data structures"
  hasAllUniqueCharacters2: function(str) {
    for (var i = 0; i<str.length - 1; i++) {
      if (str.substring(i+1).indexOf(str[i]) !== -1) {
        return false;
      }
    }
    return true;
  }
};
