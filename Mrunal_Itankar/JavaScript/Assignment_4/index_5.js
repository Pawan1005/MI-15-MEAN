function checkstring(){
var x = document.getElementById("userinput").value;
var string = x.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr){
 return chr ? match.toUpperCase() : match.toLowerCase();  //ternary operator '?' means if and ':' means else. [ex:- abc == 1(expression) ? "is 1" (if condition output) : "is not 1" (else condition output)]
});
document.getElementById("userinputstring").textContent = string;
document.getElementById("finaloutput").style.display = "block";
}