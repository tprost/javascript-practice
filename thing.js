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
  }
};
