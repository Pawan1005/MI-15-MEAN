var markArr = [];
var sumArr = [];
function addMarks() {
  var a = parseInt(document.getElementById("userinput1").value);
  if (markArr.length < 10) {
    if (a <= 80) {
      markArr.push(a);
    } else {
      alert("Not allowed to enter marks more than 80.");
    }
  } else {
    alert("Not allowed to enter subject marks more than 10.");
  }
}
function showMarks() {
  var list = "";
  var sum = 0;
  markArr.forEach(function (element, i) {
    var calculation;
    var index = i + 1;
    calculation = parseInt(element + (20 / 100) * element);
    sumArr.push(calculation);
        list += "<li>Marks " + index + " : " + calculation + "</li>";
    // console.log(calculation);
    document.getElementById("subjectMarks").innerHTML = list;
    document.getElementById("displayBeforeSorting").style.display = "block";
  });
}
  function afterSortingMarks(){
    var sortedArray = quickSort(sumArr);
    // console.log(sortedArray);
    var total = sortedArray.join(",");
    document.getElementById("total").innerHTML = total;
    document.getElementById("displayAfterSorting").style.display = "block";
  }
function quickSort(sumArr){
if (sumArr.length <= 1) {
  return sumArr;
  } else {
        var leftArr = [];              
        var rightArr = [];
        var newArr = [];
        var pivot = sumArr.pop();      //  Take a pivot value
        var length = sumArr.length;
        for (var i = 0; i < length; i++) {
           if (sumArr[i] <= pivot) {    // using pivot value start comparing
              leftArr.push(sumArr[i]);      
        } else {
                rightArr.push(sumArr[i]);
      }
    }
    return newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr));   
  }
}