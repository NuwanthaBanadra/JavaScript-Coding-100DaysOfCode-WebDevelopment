const toggleButton = document.getElementById("toggle-btn");
const body = document.body;

// Check local storage for mode
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleButton.innerText = "🌞 Switch to Light Mode";
}

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    if (body.classList.contains("dark-mode")) {
        toggleButton.innerText = "🌞 Switch to Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleButton.innerText = "🌙 Switch to Dark Mode";
        localStorage.setItem("theme", "light");
    }
});