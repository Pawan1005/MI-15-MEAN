function floyds() {
  var num, k = 1;
  var result = '';
  var x = parseInt(document.getElementById("userinput").value);
  for (var i = 1; i <= x; i++) {
    for (var j = 1; j <= i; j++, k++) {
        result += " " + k;
      num++;
    }
    result += '<br>';
  }
  document.getElementById("result").innerHTML = result;
}