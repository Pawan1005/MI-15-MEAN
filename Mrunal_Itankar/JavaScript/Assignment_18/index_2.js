function checkEligiblity(){
    var username = document.getElementById("userInputName").value;
    var userage = document.getElementById("userInputAge").value;
    var output;
    if(userage >= 18){
        output = username + " is eligible to vote.";
    }
    else{
        output = username + " is not eligible to vote.";
    }
    document.getElementById("result").textContent = output;
}