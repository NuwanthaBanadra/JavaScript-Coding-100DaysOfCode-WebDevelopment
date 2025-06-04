const display = document.getElementById("display");

// Append clicked button value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Calculate and display result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Clear the display
function clearDisplay() {
    display.value = "";
}