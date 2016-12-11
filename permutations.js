

function getPermutations(numbers) {

  // assume sorted

  function recursiveGetPermutations(sortedNumbers) {
    if (sortedNumbers.length === 0) return [[]];

    // number chosen to tack on to recursive permutations
    var index = sortedNumbers.length - 1;
    var selected = sortedNumbers[index];

    var permutations = [];

    while (selected !== undefined) {
      // remove selected number from array to produce new array `smaller`
      var smaller = sortedNumbers.slice(0, index)
            .concat(sortedNumbers.slice(index + 1, sortedNumbers.length));

      // recursively call to get permutations of `smaller`
      smaller = recursiveGetPermutations(smaller);

      // for each permutation in `smaller`, tack on `selected` and add to `permutations`
      for (var i = 0; i < smaller.length; i++) {
        smaller[i].push(selected);
      }
      permutations = smaller.concat(permutations);

      // find the next selected number from sortedNumbers (not the same as any previous one)
      // undefined if done
      var previousSelected = selected;
      while (previousSelected === selected && index >= 0) {
        index--;
        selected = sortedNumbers[index];
      }

      if (index < 0) selected = undefined;

    }
    return permutations;
  };

return recursiveGetPermutations(numbers);

};


getPermutations([1, 2]);

module.exports = {
  getPermutations: getPermutations
};
