var button = document.querySelector('.button');
let cityName = document.querySelector('.name');
let descr = document.querySelector('.descr');
let feel = document.querySelector('.feel');
let other = document.querySelector('.other');
let minMax = document.querySelector('.minmax');
let temp = document.querySelector('.temp');

//Pattern value - City Vancouver
let vlat = 49.24 ;
let vlong = -123.11;

//Los Angeles
//let vlat = 34.05;
//let vlong = -118.24;


const loadWeater = (lat, lon) => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid=6fe6f8dc9f3b29c275f458284bb12fcd').then(res=> res.json())
    .then(data => {localStorage.setItem('weather', JSON.stringify(data))})
    .catch(error => console.log('error',error));
}

loadWeater(vlat, vlong);

function getWeater() {
    const currentWeather = localStorage.getItem('weather');
    return JSON.parse(currentWeather);
};

const CurrentWeather = getWeater();

console.log(CurrentWeather);

let Cname= CurrentWeather.name;
let Ccountry= CurrentWeather.sys.country;
let latitude = CurrentWeather.coord.lat;
let longitude= CurrentWeather.coord.lon;
let Ctemp = CurrentWeather.main.temp;
let Cfeel= CurrentWeather.main.feels_like;
let Cmin = CurrentWeather.main.temp_min;
let Cmax = CurrentWeather.main.temp_max;
let Cweather = CurrentWeather.weather[0].main;
let temperature = CurrentWeather.weather[0].description;
let humidity = CurrentWeather.main.humidity;
let visibility= CurrentWeather.visibility / 1000;

let icon = CurrentWeather.weather[0].icon;
    console.log(Cname);
    console.log(Ccountry);
    console.log(Ctemp);
    console.log(Cfeel);
    console.log(Cmin);
    console.log(Cmax);
    console.log(Cfeel);
    console.log(humidity);
    console.log(visibility);
    console.log(Cweather);
    console.log(temperature);
    console.log(icon);
    console.log(latitude);
    console.log(longitude);

cityName.innerHTML = `<div class="nameleft"> ${Cname}, ${Ccountry}</div><div class="nameright"><span class="material-icons-outlined"> star_border</span></div>`;
descr.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp} °C`;
feel.innerHTML = `Feels like:  ${Cfeel} °C`;
other.innerHTML=   `Humidity: ${humidity}%      -   Visibility:  ${visibility} km`;
minMax.innerHTML = `<span class="material-icons-outlined">device_thermostat</span>  Min:  ${Cmin} °C  -   Max:  ${Cmax} °C ` ;
temp.innerHTML =  `<b>${Cweather} </b>(<i>${temperature}</i>)`;

document.body.style.backgroundRepeat= "no-repeat";
document.body.style.backgroundSize = "cover";  

if ( Cweather=== "Clear"){
    document.body.style.backgroundImage = "url('img/sunny.jfif')";
}
else if( Cweather=== "Rain"  || Cweather === "Thunderstorm"  || Cweather === "Drizzle"  ){
    document.body.style.backgroundImage = "url('img/rainy.jfif')";
}
else if( Cweather=== "Snow"){
    document.body.style.backgroundImage = "url('img/snow.jfif')";
}
else{
    document.body.style.backgroundImage = "url('img/cloudy.jfif')";
}


button.addEventListener('click',function(){
   alert("Refreshing data...");
    getWeater()
})
