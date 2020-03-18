// A function to sing the famous folksong, using the nwrite method in nwrite.js
function singBeer(n) {
  var originalBeer = n;
  var words = ['no bottles of beer', 'one bottle of beer'];
  for (var i = 2; i <= n; i++) {
    words[i] = nwrite(i) + ' bottles of beer';
  }
  while (n > 0) {
    document.write(`<p>${capitalize(words[n])} on the wall, ${words[n]}.</p>`);
    n--;
    document.write(`<p>Take one down, pass it around, ${words[n]}...</p>`);
  }
  document.write(`<p>No more bottles of beer on the wall, no more bottles of beer...</p>`);
  document.write(`<p>Go to the store and buy some more, ${words[originalBeer]} on the wall...</p>`);
}
