function calculation(){
var a = parseInt(document.getElementById("sub1").value);
var b = parseInt(document.getElementById("sub2").value);
var c = parseInt(document.getElementById("sub3").value);
var d = parseInt(document.getElementById("sub4").value);
var e = parseInt(document.getElementById("sub5").value);

var subtotalmarks = a + b + c + d + e;
var percent = (subtotalmarks / 500)* 100;
console.log(percent);
var result; 
if(percent >= 75 && percent <= 100){
// document.getElementById("grade"). textContent = A;
result = "A";
}else if(percent <= 74 && percent >= 60 ){
resukt = "B";
}else if(percent <= 59 && percent >= 40){
    result = "C";
}else if(percent <= 40 && percent >= 30){
    result = "D";
}else{
    result = "F";
}
document.getElementById("totalmarks").textContent = subtotalmarks;
document.getElementById("percentage").textContent = percent;
document.getElementById("grade").textContent = result;
}