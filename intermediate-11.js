
function convertHTML(str) {
 // &colon;&rpar;
 var ampd = str.replace(/&/g, "&amp;");
 var bracketd = ampd.replace(/</g, "&lt;").replace(/>/g, "&gt;");
 var dquotd = bracketd.replace(/"/g, "&quot;");
 var squotd = dquotd.replace(/'/g, "&apos;");
 return squotd;
}

convertHTML("Hamburgers < Pizza < Tacos");
