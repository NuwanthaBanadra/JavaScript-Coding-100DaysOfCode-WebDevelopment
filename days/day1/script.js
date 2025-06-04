// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Change background color when button is clicked
document.getElementById("changeColorBtn").addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
});