var num = parseInt(prompt("Enter Number"));
if (primeNumber() && palindrome()) {
  document.write("The inputed number is Prime Palindrome");
} else {
  document.write("The inputed number is not Prime Palindrome");
}
function primeNumber() {
  let isPrime = true;
  if (num === 1) {
    isPrime = false;
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        isPrime = false;
      }
    }
  }
  return isPrime;
}
function palindrome() {
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
    return true;
  } else {
    return false;
  }
}