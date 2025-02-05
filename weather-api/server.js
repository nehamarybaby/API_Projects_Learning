const express = require('express'); // Import Express.js
const app = express(); // Create an Express application

// Sample weather data
const weatherData = {
    "Kochi": { temperature: "30°C", humidity: "80%", condition: "Sunny" },
    "Mumbai": { temperature: "32°C", humidity: "85%", condition: "Cloudy" },
    "Delhi": { temperature: "28°C", humidity: "70%", condition: "Rainy" }
};

// API Endpoint: Get weather by city
app.get('/weather/:city', (req, res) => {
    const city = req.params.city;
    console.log("City received from request:", city); // Debugging line

    const data = weatherData[city];

    if (data) {
        res.json({ city, ...data });
    } else {
        res.status(404).json({ error: "City not found. Try another city." });
    }
});



// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
