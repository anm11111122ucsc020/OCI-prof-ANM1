// Function to get weather data from OpenWeatherMap API
async function getWeather() {
  // Get the city entered by the user
  const city = document.getElementById('city').value;

  // Replace with your actual OpenWeatherMap API key
  const apiKey = 'YOUR_API_KEY'; 

  // Build the API URL
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Clear any previous weather info
  document.getElementById('weather-info').style.display = 'none';

  try {
    // Fetch weather data from OpenWeatherMap
    const response = await fetch(url);
    const data = await response.json();

    // Check if the city was found
    if (data.cod === '404') {
      alert('City not found!');
    } else {
      // Show the weather info section
      document.getElementById('weather-info').style.display = 'block';

      // Display the weather information
      document.getElementById('city-name').textContent = data.name;
      document.getElementById('temp').textContent = data.main.temp;
      document.getElementById('weather').textContent = data.weather[0].description;
      document.getElementById('humidity').textContent = data.main.humidity;
      document.getElementById('wind-speed').textContent = data.wind.speed;
    }
  } catch (error) {
    // Handle errors (e.g., network issues)
    console.error('Error fetching weather data:', error);
    alert('An error occurred while fetching the weather data. Please try again later.');
  }
}

// Optional: Trigger the getWeather function when the user presses the "Enter" key
document.getElementById('city').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getWeather();
  }
});
