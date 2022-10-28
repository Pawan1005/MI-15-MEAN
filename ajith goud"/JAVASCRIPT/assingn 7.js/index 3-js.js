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
function beforeSortStudentMarks() {
  //   var list = "";
  //   markarr.forEach(function (element, i) {
  //     var index = i + 1;
  //     list += "<li>Marks " + index + " : " + element + "</li>";
  //     document.getElementById("finalOutput").innerHTML = list;
  //       console.log(list);
  //   });
  display("finalOutput");
  document.getElementById("displayBeforeSorting").style.display = "block";
}
function afterSortStudentMarks() {
  for (var i = 0; i < markarr.length; i++) {
    for (var j = 0; j < markarr.length - i - 1; j++) {
      if (markarr[j] > markarr[j + 1]) {
        var temp = markarr[j];
        markarr[j] = markarr[j + 1];
        markarr[j + 1] = temp;
      }
    }
  }
  console.log(markarr);
  // var list = "";
  //   markarr.forEach(function (element, i) {
  //     var index = i + 1;
  //     list += "<li>Marks " + index + " : " + element + "</li>";
  //     document.getElementById("finalOutput2").innerHTML = list;
  //       console.log(list);
  //   });
  display("finalOutput2");
  document.getElementById("displayAfterSorting").style.display = "block";
}
function display(x) {
  var list = "";
  markarr.forEach(function (element, i) {
    var index = i + 1;
    list += "<li>Marks " + index + " : " + element + "</li>";
    //   console.log(list);
    document.getElementById(x).innerHTML = list;
  });
}