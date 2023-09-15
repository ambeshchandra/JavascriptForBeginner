
const options={
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '******************************************************',
        'X-RapidAPI-Host': '**************************************************'
      }
};

let p = fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Patna", options)
p.then((value)=>{
    return value.json()
}).then((value)=>{
    console.log(value)

    cloud_pct.innerHTML = value.cloud_pct
    temp.innerHTML = value.temp
    feels_like.innerHTML = value.feels_like
    humidity.innerHTML = value.humidity
    min_temp.innerHTML = value.min_temp
    max_temp.innerHTML = value.max_temp
    wind_speed.innerHTML = value.wind_speed
    wind_degrees.innerHTML = value.wind_degrees
    sunrise.innerHTML = value.sunrise
    sunset.innerHTML = value.sunset
   

    
})
