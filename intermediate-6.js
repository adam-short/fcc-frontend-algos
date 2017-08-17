
function translatePigLatin(str) {
  var vowels = ["A", "E", "I", "O", "U"];
  var strp = str.match(/^[bcdfghjklmnpqrstvwxyz]{1,2}/g);
  if (strp == null) {
    return str + "way";
  } else {
    return str.replace(strp[0], '') + strp[0] + "ay";
  }
}

translatePigLatin("consonant");
translatePigLatin("algorithm");
