function getCapital() {
  var capitals = ["Canberra", "Warsaw", "Mexico City", "Berlin", "New Delhi"];
  var i = document.getElementById("countries").selectedOptions[0].value;
  document.getElementById("output").value = capitals[i];
}
