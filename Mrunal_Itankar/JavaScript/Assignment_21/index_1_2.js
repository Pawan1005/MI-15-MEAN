function createTable() {
  var num1 = parseInt(document.getElementById("userInputRows").value);
  var num2 = parseInt(document.getElementById("userInputColumns").value);
  if (num1 <= 0 && num2 <= 0) {
    alert("Invalid Value!!!");
    document.getElementById("userInputRows").value = "";
    document.getElementById("userInputColumns").value = "";
  }
  for (var i = 0; i < parseInt(num1, 10); i++) {
    var table = document.getElementById("myTable").insertRow(i);
    for (var j = 0; j < parseInt(num2, 10); j++) {
      var y = table.insertCell(j);
      y.innerHTML = "Row-" + i + " Column-" + j;
    }
  }
}
