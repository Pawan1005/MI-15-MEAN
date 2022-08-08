//Method 1: Using five inputs to add names to array.
function arrayName() {
  var a = document.getElementById("userinput1").value;
  var b = document.getElementById("userinput2").value;
  var c = document.getElementById("userinput3").value;
  var d = document.getElementById("userinput4").value;
  var e = document.getElementById("userinput5").value;
  var namearr = [a, b, c, d, e];
  var arr = namearr.join(",");
  var list = "";
  document.getElementById("result").innerHTML = arr;
  // console.log(arr);
  namearr.forEach(function (element, i) {
      var index = i + 1;
    list += "<li>Name "+index+ ": " + element + "</li>";
document.getElementById("nameList").innerHTML = list;
    // console.log(list);
  });
}


// Method 2: Using one input to add names to array.
// var namearr = []; //Global Variable
// function arrayName() {
//       var list = "";
//         namearr.forEach(function (element, i) {
//           var index = i + 1; //Bcoz array index start from 0 and we need value from 1.
//         list += "<li>Name "+index+ ": " + element + "</li>";
//     document.getElementById("nameList").innerHTML = list;
//       });
//     }
// function addName(){
//     var a = document.getElementById("userinput1").value;
//     namearr.push(a);
//     var arr = namearr.join(","); //Input names are joined by ",".
//     document.getElementById("result").innerHTML = arr;
// }