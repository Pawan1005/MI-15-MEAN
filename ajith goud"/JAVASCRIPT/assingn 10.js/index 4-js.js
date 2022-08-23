var str = prompt("Enter Date: ");
var value = validateDate(str);
function validateDate(str){
    regexp = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;
    if (regexp.test(str)) {
    document.write('Inserted date "' + str + '" is a valid.')
  } else {
    document.write('Inserted date "' + str + '" is a valid.')
  }
}


// function getDate(d)
// {
//     var day, month, year;

//     result = d.match("[0-9]{2}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{4}");
//     if(null != result) {
//         dateSplitted = result[0].split(result[1]);
//         day = dateSplitted[0];
//         month = dateSplitted[1];
//         year = dateSplitted[2];
//     }
//     result = d.match("[0-9]{4}([\-/ \.])[0-9]{2}[\-/ \.][0-9]{2}");
//     if(null != result) {
//         dateSplitted = result[0].split(result[1]);
//         day = dateSplitted[2];
//         month = dateSplitted[1];
//         year = dateSplitted[0];
//     }

//     if(month>12) {
//         aux = day;
//         day = month;
//         month = aux;
//     }

//     return year+"/"+month+"/"+day;
// }

// alert(getDate('test 2021/01/01 this'))