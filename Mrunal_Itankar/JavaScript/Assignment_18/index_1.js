function is_alphanumeric(e) {
    if (e.charCode < 48 || e.charCode > 57) {
        alert("Enter number only.")
      return false;
    }
    return true;
    checkNumber();
  }
function checkNumber(){
    var num = document.getElementById("userInput").value;
    var result;
    var numPattern = /[\d]/;
    if(num % 2 == 0){
        result = "The number is even." 
    }
    else{
        result = "The number is odd." 
    }
    document.getElementById("result").textContent = result;
}