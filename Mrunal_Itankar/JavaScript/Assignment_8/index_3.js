var markArr = [];
var sumArr = [];
function addMarks() {
  var a = parseInt(document.getElementById("userinput1").value);
  if (markArr.length < 10) {
    if (a <= 80) {
      markArr.push(a);
      document.getElementById("userinput1").value = "";
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
  });
}
function sortingMethod() {
  document.getElementById("selectSortingMethod").style.display = "block";
}
function sorting() {
  var x = parseInt(document.getElementById("inputSortingMethod").value);
  var sort;
  showMarks();
  switch (x) {
    case 1:
      sort = bubbleSorting(sumArr);
      break;
    case 2:
      sort = insertionSorting(sumArr);
      break;
    case 3:
      sort = selectionSorting(sumArr);
      break;
    case 4:
      sort = quickSorting(sumArr);
      break;
    default:
      alert("No Sorting Method Available.");
      break;
  }
  console.log(sort);
  document.getElementById("result").innerHTML = "Sorted List: " +sort;
}
function bubbleSorting(markArr) {
  for (var i = 0; i < markArr.length; i++) {
    for (var j = 0; j < markArr.length - i - 1; j++) {
      if (markArr[j] > markArr[j + 1]) {
        var temp = markArr[j];
        markArr[j] = markArr[j + 1];
        markArr[j + 1] = temp;
      }
    }
  }
  return markArr;
}
function insertionSorting(markArr) {
  for (let i = 1; i < markArr.length; i++) {
    let current = markArr[i];
    let j = i - 1;
    while (j > -1 && current < markArr[j]) {
      markArr[j + 1] = markArr[j];
      j--;
    }
    markArr[j + 1] = current;
  }
  return markArr;
}
function selectionSorting(markArr) {
  for (let i = 0; i < markArr.length; i++) {
    let min = i;
    for (let j = i + 1; j < markArr.length; j++) {
      if (markArr[j] < markArr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let tmp = markArr[i];
      markArr[i] = markArr[min];
      markArr[min] = tmp;
    }
  }
  return markArr;
}
function quickSorting(markArr) {
  if (sumArr.length <= 1) {
    return sumArr;
  } else {
    var leftArr = [];
    var rightArr = [];
    var newArr = [];
    var pivot = sumArr.pop(); //  Take a pivot value
    var length = sumArr.length;
    for (var i = 0; i < length; i++) {
      if (sumArr[i] <= pivot) {
        // using pivot value start comparing
        leftArr.push(sumArr[i]);
      } else {
        rightArr.push(sumArr[i]);
      }
    }
    return newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr));
  }
}
