function checkprimeno() {
  var x = document.getElementById("userinput").value;
  var y;
  for (var i = 2; i < x - 1; i++) {
    if (x % i == 0) {
      y = "not prime number";
    }
    else{
        y = "prime number";
    }
  }
  document.getElementById("primeresult").textContent = x;
  document.getElementById("output").textContent = y;
  document.getElementById("finaloutput").style.display = "block";
}
