
function sumPrimes(num) {
  var all = [];
  var sum = 0;
  for (var i=2; i <= num; i ++) {
    var max = Math.sqrt(i);
    var prime = true;
    for (var j=0; j < all.length; j++) {
      if (j >= max) { break; }
      if (i % all[j] == 0) {prime = false;}
    }
    all.push(i);
    if (prime) { sum += i; }
  }
  return sum;
}

sumPrimes(10);
