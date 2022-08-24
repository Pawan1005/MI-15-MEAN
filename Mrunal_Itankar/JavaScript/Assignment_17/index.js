var roll, stdname, mmarks, smarks, hmarks, total, percent, grade;
function is_alphanumeric(e) {
  if (e.charCode < 48 || e.charCode > 57) {
    alert(" Alphabets not allowed.");
    return false;
  }
  return true;
}
function calculation() {
  mmarks = parseInt(document.getElementById("inputMathsMarks").value);
  smarks = parseInt(document.getElementById("inputScienceMarks").value);
  hmarks = parseInt(document.getElementById("inputHistoryMarks").value);
  total = mmarks + smarks + hmarks;
  percent = (total / 300) * 100;
  if (percent >= 80 && percent <= 100) {
    grade = '<span style="color:green; font-weight: bold;">A+</span>';
  } else if (percent < 80 && percent >= 60) {
    grade = '<span style="color:green; font-weight: bold;">A</span>';
  } else if (percent < 60 && percent >= 55) {
    grade = '<span style="color:#FFBF00; font-weight: bold;">B+</span>';
  } else if (percent < 55 && percent >= 40) {
    grade = '<span style="color:#FFBF00; font-weight: bold;">B</span>';
  } else {
    grade = '<span style="color:red; font-weight: bold;">F</span>';
  }
}
function studentDetails() {
  roll = document.getElementById("inputRollNo").value;
  stdname = document.getElementById("inputName").value;
  calculation();
  document.getElementById("result").innerHTML =
    "<h2>******REPORT CARD******</h2><br>" +
    "RollNo : " +
    roll +
    "<br>Name : " +
    stdname.toUpperCase() +
    "<br>Maths : " +
    mmarks +
    "<br>Science: " +
    smarks +
    "<br>History : " +
    hmarks +
    "<br>"+"<span style= font-weight:bold;>TOTAL : </span> " +
    total +
    "<br>"+"<span style= font-weight:bold;>PERCENTAGE : </span>" +
    percent +
    "<br>"+"<span style= font-weight:bold;>GRADE : </span> " +
    grade;
}
