function convert() {
    var x = document.getElementById("temp").value;
    y = parseFloat(x) * 1.8 + 32;
    document.getElementById("celcius").textContent = x;
    document.getElementById("fahrenheit").textContent = y;
  }