var namearr = [];
var arr;
function addNumber() {
    var number = prompt("Please enter number.");
    namearr.push(number);
    var arr = namearr.join(",");
    console.log(arr);
}
function calculateNumber() {
    var sum = 0;
    for (var i = 0; i < namearr.length; i++) {
        sum += parseInt(namearr[i]);
    }
    document.getElementById("sumResult").textContent = sum;
    document.getElementById("finalOutput").style.display = "block";
}