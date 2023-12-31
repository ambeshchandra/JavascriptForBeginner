
 
const options={
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '50534b77bfmsh93927d1a2694b95p1cd585jsna5d3df30bc88',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      
      }
};

const getweather = (city)=>{
    cityname.innerHTML=city;
let p = fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city, options)
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
}

myButton.addEventListener("click", (e)=>{
    getweather(city.value);
})

getweather("Delhi");