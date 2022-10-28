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
   display("finalOutput");
  document.getElementById("displayBeforeSorting").style.display = "block";
}
function afterSortStudentMarks() {
    for (let i = 1; i < markarr.length; i++) {
        let current = markarr[i];
        let j = i-1; 
        while ((j > -1) && (current < markarr[j])) {
            markarr[j+1] = markarr[j];
            j--;
        }
        markarr[j+1] = current;
    }
  console.log(markarr);
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