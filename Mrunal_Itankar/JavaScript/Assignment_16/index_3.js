var image = 1;
function imageChange() {
  image += 1;
  if (image > 3) {
    image = 1;
  }
  var a = document.getElementsByClassName("content");
  for (i of a) {
    i.style.display = "none";
  }
  document.getElementById("pic" + image).style.display = "block";
}
