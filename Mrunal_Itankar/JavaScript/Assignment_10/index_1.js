var str = prompt("Enter String.");
var myArray = str.split("");
console.log(myArray);
if(myArray[0].toUpperCase() === myArray[0]){
    document.write("First letter is uppercase");
}
else{
    document.write("First letter is not uppercase");
}
