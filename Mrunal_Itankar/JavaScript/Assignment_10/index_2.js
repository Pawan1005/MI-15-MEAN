var num = parseInt(prompt("Enter Card Number: "));
var value = is_creditCard(num);
function is_creditCard(num) {
  regexp =
    /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
  if (regexp.test(num)) {
    document.write("Inserted number " + num + " is a credit card.")
  } else {
    document.write("Inserted number " + num + " is not a credit card.")
  }
}