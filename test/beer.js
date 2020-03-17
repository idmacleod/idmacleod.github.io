function sing(n) {
  if (n == 0) {
    return 'no bottles of beer';
  } else if (n == 1) {
    return '1 bottle of beer';
  } else {
    return n + ' bottles of beer';
  }
}

function singBeer(n) {
  var originalBeer = n;
  while (n > 0) {
    document.write(`<p>${sing(n)} on the wall, ${sing(n)}.</p>`);
    n--;
    document.write(`<p>Take one down, pass it around, ${sing(n)}.</p>`);
  }
  document.write(`<p>No more bottles of beer on the wall, no more bottles of beer...</p>`);
  document.write(`<p>Go to the store and buy some more, ${sing(originalBeer)} on the wall...</p>`);
}

singBeer(99);
