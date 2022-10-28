function fibonacci() {
  var num = parseInt(document.getElementById("userinput").value);
  var n1 = 0,
    n2 = 1,
    output;
  for (var i = 1; i <= num; i++) {
    document.getElementById("output").innerHTML += " " + n1;
    output = n1 + n2;
    n1 = n2;
    n2 = output;
  }
  document.getElementById("userinputnumber").textContent = num;
  document.getElementById("finaloutput").style.display = "block";
}