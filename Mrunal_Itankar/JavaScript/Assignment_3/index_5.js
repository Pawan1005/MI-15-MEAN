function checknumber() {
  var numberinput = parseInt(document.getElementById("userinput").value);
  var number = 1;
  if (numberinput < 0) {
    alert("Error! Factorial for negative number does not exist.");
  } else if (numberinput === 0) {
    number = "1";
  } else {
    for (i = 1; i <= numberinput; i++) {
      number *= i;
    }
  }
  document.getElementById("numberoutput").textContent = number;
  document.getElementById("numberresult").textContent = numberinput;
  document.getElementById("finaloutput").style.display = "block";
}
