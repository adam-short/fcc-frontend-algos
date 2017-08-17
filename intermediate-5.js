function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function myReplace(str, before, after) {
  var capretained = "";
  if (before.toUpperCase() == before) {
    capretained = after.toUpperCase();
  } else if (before.toLowerCase() == before) {
    capretained = after.toLowerCase();
  } else if (capitalizeFirstLetter(before) == before) {
    capretained = capitalizeFirstLetter(after);
  }
  return str.replace(before, capretained);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
