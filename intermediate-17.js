
function dropElements(arr, func) {
  // Drop them elements.
  var firstPass = arr.findIndex(func);
  return firstPass > -1 ? arr.slice(firstPass) : [];
}

dropElements([1, 2, 3], function(n) {return n < 3; });
