function checknumber() {
  var number = document.getElementById("userinput").value;
  var numberOfDigits = number.length;
  var sum = 0;
  var output;
  let temp = number;
while (temp > 0){
    var remainder = temp % 10;
    sum += remainder ** numberOfDigits;
    temp = parseInt(temp / 10);
}
if(sum == number){
    output = "an Armstrong number";
}
else{
    output = "not an Armstrong number";
}
document.getElementById("userinputnumber").textContent = number;
document.getElementById("output").textContent = output;
document.getElementById("finaloutput").style.display = "block";
}
