
function addTogether() {
  if (!Array.from(arguments).every(function (e) { return (typeof e) == "number"; })) {
    return undefined;
  }
  else if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    var b = arguments[0];
    return function add (a) {
      return (typeof a) == "number" ? a + b : undefined;
    };
  }
}

addTogether(2, "3");
