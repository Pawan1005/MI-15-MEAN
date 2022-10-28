function calculation() {
  var sum = 0,
    product = 1;
  var num = document.getElementById("userinput").value;
  if (num.length != 6) {
    alert("Invalid Number!!Please enter a 6 digit no.");
  } else {
    var x = num.split("");  //split is use to convert string to array.
    x.forEach(function (element, i) {  //i is taken to check index number.
      if (element % 2 == 0) {
        sum = parseInt(sum) + parseInt(element);
      } else {
        product = product * element;
      }
    });
  }
  document.getElementById("sumresult").textContent = sum;
  document.getElementById("productresult").textContent = product;
  document.getElementById("finaloutput").style.display = "block";
}