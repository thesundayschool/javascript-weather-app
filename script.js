let featchURL = "https://api.openweathermap.org/data/2.5/weather?q="
let cityName = '';
let apiKey = "05017894b8b0ac83af72659f3dc9d03c"

// weatherData('new delhi')

document.querySelector('.serach').addEventListener('keyup', event => {
    let { keyCode, target: input } = event

    if (keyCode === 13) {
        console.log(input.value)
        cityName = input.value
        weatherData(cityName)

        document.querySelector('.serach').value = ''
    }

})

function weatherData(CityName){
    console.log('weather data function')
    fetch(`${featchURL}${CityName}&appid=${apiKey}`)
    .then(res => res.json())
    .then(cityData =>{
        console.log(cityData)
        document.querySelector('.city').innerHTML = `${cityData.name}, ${cityData.sys.country}`
        document.querySelector('.temperature').innerHTML = `${Math.floor(cityData.main.temp - 273.15)}°c`
        document.querySelector('.weather').innerHTML = `${cityData.weather[0].main}`
        document.querySelector('.min-max').innerHTML = `Min ${Math.floor(cityData.main.temp_min - 273.15)}°c / Max ${Math.floor(cityData.main.temp_max - 273.15)}°c`
    })  
    .catch(err => alert('City not found'))      
}

weatherData('New Delhi')