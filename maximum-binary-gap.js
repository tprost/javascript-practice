//
function getMaximumBinaryGap(integer) {

  var max = 0;
  var currentMax = 0;
  var count = 0;

  var before = integer;

  for (var i = 1; i <= 32; i++) {

    var after = (before >> i) << i;
    if (before === after) {
      // zero
      count++;
      if (currentMax < count) {
        currentMax = count;
      }
    } else {
      // one
      count = 0;
      if (max < currentMax) {
        max = currentMax;
      }
      currentMax = 0;
    }
    before = after;
  }

  return max;
}


module.exports = getMaximumBinaryGap;
