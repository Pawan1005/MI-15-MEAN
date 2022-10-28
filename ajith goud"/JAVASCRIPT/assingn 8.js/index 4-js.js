var sectionAMarksArr = [];
var sectionBMarksArr = [];
function addMarks(id) {
  var a = parseInt(document.getElementById(id).value);
  if (id == "userinput1") {
    if (sectionAMarksArr.length < 5) {
      sectionAMarksArr.push(a);
      document.getElementById(id).value = "";
    } else {
      alert("Not allowed to enter subject marks more than 5.");
    }
  } else {
    if (sectionBMarksArr.length < 5) {
      sectionBMarksArr.push(a);
      document.getElementById(id).value = "";
    } else {
      alert("Not allowed to enter subject marks more than 5.");
    }
  }
}
function showMarks() {
  var res = new Array(sectionAMarksArr.length + sectionBMarksArr.length);
  var sort = sortedMerge(
    sectionAMarksArr,
    sectionBMarksArr,
    res,
    sectionAMarksArr.length,
    sectionBMarksArr.length
  );
  document.getElementById("finalOutput").innerHTML = "Sorted List: " + sort;
}
function sortedMerge(a, b, res, n, m) {
  // Sorting a[] and b[]
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  // Merge two sorted arrays into res[]
  let i = 0,
    j = 0,
    k = 0;
  while (i < n && j < m) {
    if (a[i] <= b[j]) {
      res[k] = a[i];
      i += 1;
      k += 1;
    } else {
      res[k] = b[j];
      j += 1;
      k += 1;
    }
  }
  while (i < n) {
    // Merging remaining
    // elements of a[] (if any)
    res[k] = a[i];
    i += 1;
    k += 1;
  }
  while (j < m) {
    // Merging remaining
    // elements of b[] (if any)
    res[k] = b[j];
    j += 1;
    k += 1;
  }
  return res;
}