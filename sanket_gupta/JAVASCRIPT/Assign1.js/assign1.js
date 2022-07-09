function method1(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var z;
    z = x;
    x = y;
    y = z;
    document.getElementById("result1").textContent = x;
    document.getElementById("result2").textContent = y;
   
}
function method2(){
    var x = document.getElementById("num2").value;
    var y = document.getElementById("num1").value;
    document.getElementById("result3").textContent = x;
    document.getElementById("result4").textContent = y;
}
   