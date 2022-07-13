function checkleapyear(){
var x = document.getElementById("userinputyear").value;
var y;
if((x % 4 == 0) && (x % 100 != 0) || (x % 4 == 0) && (x % 400 == 0)){
    y = "leap year";
}
else 
{
    y = "not a leap year";
}
document.getElementById("yearresult").textContent = x;
document.getElementById("output").textContent = y;
document.getElementById("finaloutput").style.display = "block";
}