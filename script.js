let featchURL = "https://api.openweathermap.org/data/2.5/weather?q="
let cityName = null;
let apiKey = "05017894b8b0ac83af72659f3dc9d03c"


document.querySelector('.serach-box').addEventListener('keyup', event => {
    let { keyCode, target: input } = event

    if (keyCode === 13) {
        console.log(input.value)
        cityName = input.value
        weatherData(cityName)
    }

    function weatherData(CityName){
        console.log('weather data function')
        fetch(`${featchURL}${CityName}&appid=${apiKey}`)
        .then(res => res.json())
        .then(cityData =>{
            console.log(cityData)
            document.querySelector('.city').innerHTML = `${cityData.name}, ${cityData.sys.country}`
            document.querySelector('.temp').innerHTML = `${Math.floor(cityData.main.temp - 273.15)} *c`
            document.querySelector('.weather').innerHTML = `${cityData.weather[0].main}`
            document.querySelector('.hi-low').innerHTML = `${Math.floor(cityData.main.temp_min - 273.15)} - ${Math.floor(cityData.main.temp_max - 273.15)}`
        })  
        .catch(err => alert('City not found'))      


    }


})