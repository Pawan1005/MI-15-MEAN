var num = parseInt(prompt("Enter Number"));
  var rem,
    temp,
    final = 0;
  temp = num;
  while (num > 0) {
    rem = num % 10;
    num = parseInt(num / 10);
    final = final * 10 + rem;
  }
  if (final == temp) {
    document.write("The inputed number is Palindrome");
  } else {
    document.write("The inputed number is not palindrome");
  }