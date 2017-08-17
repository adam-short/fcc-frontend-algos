
function sumFibs(num) {
  var fib = [0, 1];

  var i = 2;
  while (fib[fib.length-2]+fib[fib.length-1] <= num) {
    fib[i] = fib[i-1] + fib[i-2];
    i += 1;
  }
  return fib.filter(function (e) { return e % 2 !== 0; }).reduce(function (a,b) { return a + b; });
}

sumFibs(4);
