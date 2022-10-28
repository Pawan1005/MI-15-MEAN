function findprimenumber() {
  var num1 = parseInt(document.getElementById("userinput1").value);
  var num2 = parseInt(document.getElementById("userinput2").value);
var result = "";
  for (let i = num1; i <= num2; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      result += " " + i;
    // console.log(i);
    }
  }
  document.getElementById("output").textContent = result;
  document.getElementById("finaloutput").style.display = "block";
}