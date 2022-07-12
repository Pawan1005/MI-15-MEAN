function factorial(num){
    let fact = 1;
    while(num != 0){
        fact *= num;
        num--;
    }
    return fact;
}
function krishnamurthy(){
var num = parseInt(document.getElementById("userinput").value);
var sum = 0;
var temp = num;
var output;
while(temp != 0){
    sum += factorial(temp % 10);
    temp = parseInt(temp / 10);
}
if(sum == num){ 
output = "an Krishnamurthy number";
}
else{
    output = "not an Krishnamurthy number";
}
document.getElementById("userinputnumber").textContent = num;
document.getElementById("output").textContent = output;
document.getElementById("finaloutput").style.display = "block";
}