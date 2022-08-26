function generateTable() {
  var num = parseInt(document.getElementById("userInput").value);
  var output = "";
  for (var i = 1; i <= 10; i++) {
    output += "<p>"+num + " * " + i + " = " + num * i +"</p>";  
  }
document.getElementById("result").innerHTML = output;
}
