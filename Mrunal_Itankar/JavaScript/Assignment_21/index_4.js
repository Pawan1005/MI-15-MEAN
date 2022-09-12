function login(){
    var name = document.getElementById("userInputUsername").value;
    var pass = document.getElementById("userInputPassword").value;
if(name.toLowerCase() == "admin" && pass == "admin123"){
    alert("Login Successfull.")
}
else{
    alert("Enter a valid id and password.")
}
}