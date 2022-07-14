function checknumber() {
    var a = document.getElementById("userinput").value;
    var b;
    if(a % 2 == 0){
      b = "even number"
    }
    else{
      b  = "odd number"
    }
    document.getElementById("numberresult").textContent = a;
    document.getElementById("numberoutput").textContent = b;
    document.getElementById("finaloutput").style.display = "block";
  }