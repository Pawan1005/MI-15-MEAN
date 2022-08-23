
var markarr = [];
var number = parseInt(prompt("Please enter number of students."));
// console.log(number);
function addStudentMarks() {
  if (number > markarr.length) {
    var a = document.getElementById("userinput").value;
    markarr.push(a);
  } else {
    alert("You have entered all " + number + " student's marks.");
  }
}
function showStudentMarks() {
  var list = "";
  markarr.forEach(function (element, i) {
    var index = i + 1;
    list += "<li>Marks " + index + " : " + element + "</li>";
    document.getElementById("finalOutput").innerHTML = list;
    //   console.log(list);
  });
}
