function automorphic(){
var num = document.getElementById("userinput").value;
var sum = num * num;
var output;
if(num % 10 != sum % 10){
    num = num / 10;
    sum = sum / 10;
    output = "not an atomorphic number";
}
else{
    output = "an anatomorphic number";
}
document.getElementById("userinputnumber").textContent = num;
document.getElementById("output").textContent = output;
document.getElementById("finaloutput").style.display = "block" ;
}