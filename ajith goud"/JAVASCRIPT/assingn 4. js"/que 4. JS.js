function checkvowel() {
  var alpha = document.getElementById("userinput").value;
  switch (alpha) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
      text = "Vowel";
      break;
    default:
      text = "not Vowel";
  }
  document.getElementById("userinputcharacter").textContent = alpha;
  document.getElementById("output").textContent = text;
  document.getElementById("finaloutput").style.display = "block";
}