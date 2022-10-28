var namearr = [];
var arr, a;
function addNumber() {
  var number = prompt("Please enter number.");
  namearr.push(number);
  arr = namearr.join(",");
  console.log(arr);
  document.getElementById("sumInput").textContent = arr;
}
function sumFactorial() {
  var fact = [];
  var f;
  var sum = 0;
  var factReverse;
  namearr.forEach(function (element, i) {
    if (parseInt(element) === 0 || parseInt(element) === 1) {
      f = 1;
      console.log(f);
    } else {
      f = 1;
      for (var i = element; i >= 1; i--) {
        f = f * i;
        console.log(f);
      }
    }
    fact.push(f);
    console.log(fact);
    sum += f;
  });
  factReverse = fact.reverse();
  console.log(sum);
  document.getElementById("sumResult").textContent = sum;
  document.getElementById("descendingResult").innerHTML = factReverse;
  document.getElementById("finalOutput").style.display = "block";
}