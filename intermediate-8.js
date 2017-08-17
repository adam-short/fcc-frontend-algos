
function fearNotLetter(str) {
  var lastcode = str.charCodeAt(0);
  for (var i=1; i < str.length; i++) {
    if (str.charCodeAt(i) !== lastcode + 1) {
      return String.fromCharCode(lastcode + 1);
    } else {
      lastcode += 1;
    }
  }

  return undefined;
}

fearNotLetter("abce");
