function calculateAmount() {
  var amount = document.getElementById("userInputAmount").value;
  var output;
  if (amount >= 1000) {
    output = (15 / 100) * amount;
  } else {
    output = (5 / 100) * amount;
  }
  document.getElementById("result").textContent = "Discount is: " + output + "Rs.";
}
