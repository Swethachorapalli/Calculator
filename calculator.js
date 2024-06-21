function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function deleteLast() {
  var displayValue = document.getElementById("display").value;
  document.getElementById("display").value = displayValue.slice(0, -1);
}

function calculate() {
  var expression = document.getElementById("display").value;
  var result = eval(expression);
  document.getElementById("display").value = result;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}