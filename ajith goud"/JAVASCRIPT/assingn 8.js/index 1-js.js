var markArr = [];
function addMarks() {
  var a = parseInt(document.getElementById("userinput1").value);
  if (markArr.length < 10) {
    if (a <= 80) {
      markArr.push(a);
    } else {
      alert("Not allowed to enter marks more than 80.");
    }
  } else {
    alert("Not allowed to enter subject marks more than 10.");
  }
}
function showMarks() {
  var list = "";
  markArr.forEach(function (element, i) {
    var calculation;
    var index = i + 1;
    calculation = parseInt(element + (20 / 100) * element);
    list += "<li>Marks " + index + " : " + calculation + "</li>";
    console.log(calculation);
    document.getElementById("subjectMarks").innerHTML = list;
  });
}