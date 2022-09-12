function changeContent() {
  var num1 = parseInt(document.getElementById("userInputRows").value);
  var num2 = parseInt(document.getElementById("userInputColumns").value);
  var content = document.getElementById("userInputContent").value;
  var x = document.getElementById("myTable").rows[parseInt(num1, 107)].cells;
  x[parseInt(num2, 10)].innerHTML = content;
}
