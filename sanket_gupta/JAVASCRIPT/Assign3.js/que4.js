function pattern(){
    var numberRow = document.getElementById("rows").value;
    var numberColumn = document.getElementById("columns").value;
    var stringRectangle = '';
    for(var i = 1; i <= numberRow; i++){
        for(var j = 1; j <= numberColumn; j++){
            stringRectangle += '*';
        }
        stringRectangle += "<br>";
    }
 document.getElementById("output").innerHTML= stringRectangle;
    } 