

function reverseInteger(integer) {

  var negative = integer < 0;
  integer = Math.abs(integer);

  var sum = 0;

  // set n to be the number of digits in `integer`
  var x = integer;
  var n = 0;
  while (x > 0) {
    n++;
    x = Math.floor(x / 10);
  }

  for (var i = 1; i <= n; i++) {
    var place = n - i + 1;
    var x = Math.pow(10, place - 1);
    var digit = (integer - (integer % x)) / x;
    sum += digit*(Math.pow(10, i - 1));
    integer = integer - (digit * x);
  }

  if (negative) sum = sum * -1;
  return sum;

};


