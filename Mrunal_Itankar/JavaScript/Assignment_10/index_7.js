var str = prompt("Enter String.");
var value = is_alphaNumeric(str);
function is_alphaNumeric(str) {
  regexp = /^[A-Za-z0-9]+$/;
  if (regexp.test(str)) {
    document.write('Inserted string "' + str + '" is alpha numeric.');
  } else {
    document.write('Inserted string "' + str + '" is not alpha numeric.');
  }
}
