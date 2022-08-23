var namearr = [];
function arrayName() {}
function addName(type) {
  var name = prompt("Please enter name.");
  if (type != "cancel" && name.lowercase != "x") {
    namearr.push(name);
    var arr = namearr.join(",");
    var result = arr.toUpperCase();
    console.log(result);
    var desc = namearr.reverse();
    document.getElementById("ascResult").innerHTML = result;
    document.getElementById("descResult").innerHTML = desc;
    document.getElementById("finalOutput").style.display = "block";
}
}