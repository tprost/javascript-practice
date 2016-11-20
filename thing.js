

function stringPermutations(str) {
  if (str.length == 1) return [str];
  var permutations = [];
  for (var i = 0; i < str.length; i++) {
    var character = str[i];
    var rest = str.substring(0, i) + str.substring(i + 1);
    var subPermutations = stringPermutations(rest);
    for (var j = 0; j < subPermutations.length; j++) {
      permutations.push(character + subPermutations[j]);
    }
  }
  return permutations;
}

module.exports = {
  stringPermutations: stringPermutations,
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
  },
  reverse: function(str) {
    if (str.length === 1) return str;
    return module.exports.reverse(str.substring(1)) + str[0];
  }
};
