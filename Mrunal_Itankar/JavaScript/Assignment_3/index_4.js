function pattern(){
var numberRow = document.getElementById("rowsinput").value;
var numberColumn = document.getElementById("columnsinput").value;
var stringRectangle = '';
for(var i = 1; i <= numberRow; i++){
    for(var j = 1; j <= numberColumn; j++){
        stringRectangle += '*';    
    }
    
    stringRectangle += '<br>';
}
document.getElementById("finaloutput").innerHTML = stringRectangle;
// console.log(stringRectangle);
}