// Define some new constant arrays...
const smalls = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const illions = ['hundred', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion',
                 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion',
                 'duodecillion', 'tredecillion', 'quattuordecillion', 'quindecillion', 'sexdecillion',
                 'septendecillion', 'octodecillion', 'novemdecillion', 'vigintillion'];

// A function to write numbers in English...
function nwrite(n) {
  if (n < 20) {
    return smalls[n];
  } else if (n < 100) {
    let count_10s = Math.floor(n / 10);
    if (n % 10 == 0) {
      return tens[count_10s];
    } else {
      return tens[count_10s] + "-" + nwrite(n - 10 * count_10s);
    }
  } else if (n < 1000) {
    let count_100s = Math.floor(n / 100);
    if (n % 100 == 0) {
      return `${nwrite(count_100s)} hundred`;
    } else {
      return `${nwrite(count_100s)} hundred and ${nwrite(n - 100 * count_100s)}`;
    }
  } else {
    return nwriteBig(n);
  }
}

// A helper function for larger numbers...
function nwriteBig(n) {
  // JavaScript can't reliably handle numbers over 9007199254740991
  if (n > Number.MAX_SAFE_INTEGER) {
    return 'Number bigger than JavaScript\'s Number.MAX_SAFE_INTEGER'
  } else {
    // Work out the exponent of 10
    let exp = Math.floor((String(n).length - 1) / 3) * 3;
    let mult = 10**exp; // Find the multiplier for this exponent
    let count = Math.floor(n / mult); // And how many multiples there are in our integer
    // Then use our illions array...
    if (n % mult == 0) {
      return `${nwrite(count)} ${illions[exp / 3]}`;
    } else {
      return `${nwrite(count)} ${illions[exp / 3]}, ${nwrite(n - mult * count)}`;
    }
  }
}

// A little function to capitalize strings
function capitalize(s) {
  return `${s[0].toUpperCase()}${s.slice(1)}`;
}
