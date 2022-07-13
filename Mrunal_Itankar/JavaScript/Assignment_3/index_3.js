function checknumber() {
  var x = document.getElementById("userinput").value;
  var y;
  if(x % 2 == 0){
    y = "even number"
  }
  else{
    y = "odd number"
  }
  document.getElementById("numberresult").textContent = x;
  document.getElementById("numberoutput").textContent = y;
  document.getElementById("finaloutput").style.display = "block";
}
