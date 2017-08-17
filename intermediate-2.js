
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  newArr = arr1.concat(arr2);
  newArr = newArr.filter(function (el) {
    var count = 0;
    for (var i=0; i < newArr.length; i++) {
      if (newArr[i] == el) { count += 1; }
    }

    return count === 1;
  });
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
