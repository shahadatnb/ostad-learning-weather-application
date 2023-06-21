const Weather ={
    apiKey: '8281257e37e2ea3150b712892f8d1d30',
    apiUrl: 'https://api.openweathermap.org/data/2.5/weather',
    weatherInfo: document.getElementById('weatherInfo'),
    async getWeather(){
        this.weatherInfo.innerHTML = ''
        let cityName = document.getElementById('cityName').value
        axios({
            method: 'get',
            url: `${this.apiUrl}?q=${cityName}&appid=${this.apiKey}`
          })
            .then(function (response) {
                console.log(response.data);
                document.getElementById('weatherInfo').innerHTML = `
                <h4>Weather Information</h4>
                <p>Location: ${response.data.name}, ${response.data.sys.country}</p>
                <p>Temperature: ${response.data.main.temp}</p>
                <p>Condition: ${response.data.weather[0].description}</p>
                <p>Humidity: ${response.data.main.humidity}%</p>
            `
            });
        
    }
}

export {Weather}