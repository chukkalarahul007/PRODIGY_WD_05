document.addEventListener('DOMContentLoaded', function () {
    const locationInput = document.getElementById('location');
    const searchButton = document.getElementById('search');
    const locationName = document.getElementById('location-name');
    const temperature = document.getElementById('temperature');
    const weatherDescription = document.getElementById('weather-description');
    const pressure = document.getElementById('pressure'); 
    const humidity = document.getElementById('humidity'); 

    searchButton.addEventListener('click', function () {
        const location = locationInput.value;
        const apiKey = '3729d41bf4d15a046fc3cd2868e920a4'; 

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(data => {
                locationName.textContent = data.name + ', ' + data.sys.country;
                temperature.textContent = data.main.temp + '°C';
                weatherDescription.textContent = data.weather[0].description;
                pressure.textContent = data.main.pressure + ' hPa'; 
                humidity.textContent = data.main.humidity + '%'; 
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    });
});
