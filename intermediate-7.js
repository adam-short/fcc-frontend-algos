
function pairElement(str) {
  var pairings = str.split('');
  var res = [];
  for (var i = 0; i < pairings.length; i++) {
    switch(pairings[i]) {
      case "A":
        res.push(["A", "T"]);
        break;
      case "T":
        res.push(["T", "A"]);
        break;
      case "C":
        res.push(["C", "G"]);
        break;
      case "G":
        res.push(["G", "C"]);
        break;
    }
  }
  return res;
}

pairElement("GCG");
