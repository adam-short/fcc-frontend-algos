
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var typics = str.split(/[\s_-]/g).join('-');
  var camels = typics.replace(/([a-z](?=[A-Z]))/g, '$1 ').split(' ').join('-');
  return camels.toLowerCase();
}

spinalCase("This Is Spinal Tap");
