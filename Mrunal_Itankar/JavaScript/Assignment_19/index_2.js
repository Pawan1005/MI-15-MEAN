var myArray = [];
function enterLanguage() {
  var lang = document.getElementById("userInput").value;
  myArray.push(lang);
  var output = "";
  myArray.forEach(function (element, i) {
    output += "<li>" + element + "</li><br>";
    console.log(output);
    document.getElementById("result").innerHTML = output.toUpperCase();
    document.getElementById("userInput").value = "";
});
}
