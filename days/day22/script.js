const apiKey = "YOUR_OPENWEATHER_API_KEY"; // Get your API key from https://openweathermap.org/

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) return alert("Please enter a city name");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weatherInfo").innerHTML = "❌ City not found!";
            return;
        }

        document.getElementById("weatherInfo").innerHTML = `
            <p>🌡️ Temperature: ${data.main.temp}°C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        document.getElementById("weatherInfo").innerHTML = "⚠️ Error fetching weather data.";
    }
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
}
