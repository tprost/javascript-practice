




function integerToEnglish(int) {

  var remainder;
  var quotient;

  if (int >= 1000000) {
    quotient = Math.floor(int / 1000000);
    remainder = int - (quotient * 1000000);
    return integerToEnglish(quotient) +
      " Million" + (remainder === 0 ? "" : " " + integerToEnglish(remainder));
  } else if (int >= 1000) {
    quotient = Math.floor(int / 1000);
    remainder = int - (quotient * 1000);
    return integerToEnglish(quotient) +
      " Thousand" + (remainder === 0 ? "" : " " + integerToEnglish(remainder));
  } else if (int >= 100) {
    quotient = Math.floor(int / 100);
    remainder = int - (quotient * 100);
    return integerToEnglish(quotient) +
      " Hundred" + (remainder === 0 ? "" : " " + integerToEnglish(remainder));
  } else if (int < 20) {
    switch (int) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    case 10:
      return "Ten";
    case 11:
      return "Eleven";
    case 12:
      return "Twelve";
    case 13:
      return "Thirteen";
    case 14:
      return "Fourteen";
    case 15:
      return "Fifteen";
    case 16:
      return "Sixteen";
    case 17:
      return "Seventeen";
    case 18:
      return "Eighteen";
    case 19:
      return "Nineteen";
    }
  } else {
    // int >= 20 && <= 99
    quotient = Math.floor(int / 10);
    remainder = int - (quotient * 10);
    switch (quotient) {
    case 2:
      quotient = "Twenty";
      break;
    case 3:
      quotient = "Thirty";
      break;
    case 4:
      quotient = "Forty";
      break;
    case 5:
      quotient = "Fifty";
      break;
    case 6:
      quotient = "Sixty";
      break;
    case 7:
      quotient = "Seventy";
      break;
    case 8:
      quotient = "Eighty";
      break;
    case 9:
      quotient = "Ninety";
      break;
    }
    if (remainder > 0) {
      return quotient + " " + integerToEnglish(remainder);
    } else {
      return quotient;
    }
  }
};


console.log(integerToEnglish(1239304));
console.log(integerToEnglish(0));
console.log(integerToEnglish(1));
