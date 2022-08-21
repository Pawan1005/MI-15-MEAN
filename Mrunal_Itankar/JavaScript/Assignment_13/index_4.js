var person_dob = prompt("Enter DOB: ");
ageCalculator();
function ageCalculator(){
    var personDate = new Date(person_dob); //converting the input in date format  
    var month_diff = Date.now() - personDate.getTime();    //calculating month difference from current date in time  
    var age_diff = new Date(month_diff);       //convert the calculated difference in date format  
    var year = age_diff.getFullYear();     //extracting year from date 
    var age = Math.abs(year - 1950);     
    alert(age);
}
