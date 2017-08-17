
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var required = Object.keys(source);
  // Only change code below this line
  arr = collection.filter(function (el) {
    var keys = Object.keys(el);
    var hasKeys = required.every(function (e) { return keys.indexOf(e) > -1; });
    if (!hasKeys) {
      return false;
    } else if (!required.every(function (e) { return el[e] === source[e]; })) {
      return false;
    } else {
      return true;
    }

  });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
