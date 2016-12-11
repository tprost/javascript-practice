function restoreIpAddresses(str) {

  // TODO check validity of str
  if (typeof str !== 'string')
    throw TypeError("str should be a string");

  function recursiveRestore(str, segments) {
    if (segments === 1) {
      if (str.length > 3 || str.length === 0) {
        return [];
      } else {
        return [str];
      }
    }

    var permutations = [];

    for (var i = 1; i <= Math.min(3, str.length); i++) {
      var head = str.substring(0, i);
      if (Number(head) <= 255) {
        var rest = str.substring(i);
        var recursivePermutations = recursiveRestore(rest, segments - 1);
        // tack on head to the beginnig of each str in `recursivePermutations`
        for (var permutation of recursivePermutations) {
          permutations.push(head + "." + permutation);
        }
      }
    }

    return permutations;
  };

  return recursiveRestore(str, 4);

};

module.exports = {
  restoreIpAddresses: restoreIpAddresses
};
