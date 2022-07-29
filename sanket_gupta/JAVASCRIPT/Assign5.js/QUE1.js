function checknumber(){
    var num = document.getElementById("userinput").value;
    if(num.length!=3){
        alert("Invalid Number!!Please enter a 3 digit no.");
    } 
    else{
    var result = num.split("");
    var sum = parseInt(result[0]) + parseInt(result[2]);
    var output = sum ==  result[1] ? "Sum matched." : "Sum does not matched."
    // console.log(output);
    }
    document.getElementById("userinputstring").textContent = output;
    document.getElementById("finaloutput").style.display = "block";
    } 