var str = prompt("Enter String.");
var myArray = str.split(" ");
var total = myArray.length;
// console.log(total);
var spacecount = myArray.length - 1;
document.write("Total Words:" + total + "<br>" + "Total Spaces:" + spacecount);
