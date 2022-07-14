function checkprimeno() {
    var a = document.getElementById("userinput").value;
    var b;
    for (var i = 2; i < a - 1; i++) {
      if (a % i == 0) {
        b = "not prime number";
      }
      else{
          b = "prime number";
      }
    }
    document.getElementById("primeresult").textContent = a;
    document.getElementById("output").textContent = b;
    document.getElementById("finaloutput").style.display = "block";
  }