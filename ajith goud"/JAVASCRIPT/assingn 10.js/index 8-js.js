var str = prompt("Enter String.");
var value = is_alphaDash(str);
function is_alphaDash(str)
{
 regexp = /^[a-z0-9_\-]+$/i;

 if (regexp.test(str)) {
    document.write('Inserted string "' + str + '" contains alpha, dash and underscore.');
  } else {
    document.write("Inserted string " + str + " does not contains alpha, dash and underscore.");
  }
}