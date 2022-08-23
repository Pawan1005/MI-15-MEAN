var markArr = [];
function addMarks() {
  var rollno = document.getElementById("userInputRollNo").value;
  var marks = document.getElementById("userInputMarks").value;
  if (markArr.length < 10) {
    if (marks > 0 || marks <= 50 && marks != "") {
      var calculation = parseInt(marks) + (20 / 100) * marks;
      var stdrollmark = {};
      stdrollmark.studentMarks = calculation;
      stdrollmark.rollNo = rollno;
      markArr.push(stdrollmark);  //Object is inputed into array.
      console.log(markArr);
      document.getElementById("userInputRollNo").value = "";
      document.getElementById("userInputMarks").value = "";
    } else {
      alert("Error – Invalid Marks!!");
    }
  } else {
    alert("Not allowed to enter marks for more than 10 subjects.");
  }
}
function showTableMarks() {
  var list = "";
  markArr.forEach(function (element, i) {
    list += "<tr><td>"+element.rollNo+"</td><td>"+element.studentMarks+"</td></tr>";
  });
  document.getElementById("tableFormateOutput").innerHTML = list;
}
function showMarks(){
var roll = parseInt(document.getElementById("showRollNo").value);
markArr.forEach(function(element, i){
  if(element.rollNo == roll){
document.getElementById("finalOutput").textContent = "Roll No. "+ roll + " has scored "+ element.studentMarks+ " marks.";
  }
  else{
    document.getElementById("finalOutput").textContent = "No records found.";
  }
});
}