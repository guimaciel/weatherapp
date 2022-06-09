
let vlat = 0;
let vlong = 0;
let vunit = "metric";

function changeUnit(clat, clon, cunit){
   vunit = cunit
   console.log(vunit);
   loadWeater(clat,clon,cunit);
}

const loadWeater = (lat, lon, unit) => {
    fetch('https://api.openweathermap.org/data/2.5/forecast/hourly?lat='+lat+'&lon='+lon+'&units='+unit+'&appid=6fe6f8dc9f3b29c275f458284bb12fcd').then(res=> res.json())
    .then(data => {getWeater(JSON.stringify(data))})
    .catch(error => console.log('error',error));
}

function getWeater() {
    const currentWeather = localStorage.getItem('weather');
    return JSON.parse(currentWeather);
};

console.dir(currentWeather);

if (currentWeather){
    
    let Ctemp = currentWeather.main.temp;
    let Cfeel= currentWeather.main.feels_like;
    let Cmin = currentWeather.main.temp_min;
    let Cmax = currentWeather.main.temp_max;
    
}