function steamrollArray(arr, res) {
  // I'm a steamroller, baby
  var result = res ? res : [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      steamrollArray(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);
