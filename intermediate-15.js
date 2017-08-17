//

function smallestCommons(arr) {
  var range = [];
  var start = Math.min.apply(null, arr);
  var end = Math.max.apply(null, arr);
  var found = 0;

  for (var i =start; i <= end; i++) { range.push(i); }

  var j = 1;
  while (found == 0) {
    var common = true;
    for (var k = 0; k < range.length; k++) {
      if (j % range[k] !== 0) {
        common = false;
      }
    }
    if (common) {
      found = j;
      break;
    } else {
      j += 1;
    }
  }

  return found;
}


smallestCommons([23, 18]);
