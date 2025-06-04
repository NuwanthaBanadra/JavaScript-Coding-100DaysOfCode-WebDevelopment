const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API Key

async function getWeather() {
    const city = document.getElementById("city").value;
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === "404") {
            alert("City not found. Please try again.");
            return;
        }

        document.getElementById("city-name").innerText = `📍 ${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").innerText = `🌡 Temperature: ${data.main.temp}°C`;
        document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
        document.getElementById("description").innerText = `🌤 Condition: ${data.weather[0].description}`;
    } catch (error) {
        alert("Error fetching weather data.");
        console.error(error);
    }
}
