function largestNumber() {
  var a = parseInt(document.getElementById("num1").value);
  var b = parseInt(document.getElementById("num2").value);
  var c = parseInt(document.getElementById("num3").value);
  var d = parseInt(document.getElementById("num4").value);
  var e = parseInt(document.getElementById("num5").value);
  var first = 0;
  var second = 0;
  var arr = [a, b, c, d, e];
  console.log(arr);
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    }
  }
  console.log(second);
  document.getElementById("result").textContent = second;
}
