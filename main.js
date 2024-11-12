const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  const input = display.value;
  try {
    const result = new Function('return ' + input)();
    display.value = result.toString();
  } catch (error) {
    display.value = "Error";
  }
}