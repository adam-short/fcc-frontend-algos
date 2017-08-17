
function uniteUnique(arr) {
  var unique = [];
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      if (unique.indexOf(arguments[i][j]) === -1) {
        unique.push(arguments[i][j]);
      }
    }
  }
  return unique;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
