var str = prompt("Enter Email: ");
var value = validateEmail(str);
function validateEmail(str){
    regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if (regexp.test(str)) {
    document.write('Inserted address "' + str + '" is a valid email.')
  } else {
    document.write('Inserted address "' + str + '" is not a valid email.')
  }
}