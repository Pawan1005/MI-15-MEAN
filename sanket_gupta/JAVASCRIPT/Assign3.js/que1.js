function checkleapyear(){
    var a = document.getElementById("userinputyear").value;
    var b;
    if((a % 4 == 0) && (a % 100 != 0) || (a % 4 == 0) && (a % 400 == 0)){
        b = "leap year";
    }
    else 
    {
        b = "not a leap year";
    }
    document.getElementById("yearresult").textContent = a;
    document.getElementById("output").textContent = b;
    document.getElementById("finaloutput").style.display = "block";
    } 