var button = document.querySelector('.button');
let cityName = document.querySelector('.name');
let descr = document.querySelector('.descr');
let feel = document.querySelector('.feel');
let other = document.querySelector('.other');
let minMax = document.querySelector('.minmax');
let temp = document.querySelector('.temp');

let vlat = 0;
let vlong = 0;

const loadWeater = (lat, lon) => {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid=6fe6f8dc9f3b29c275f458284bb12fcd').then(res=> res.json())
    .then(data => {getWeater(JSON.stringify(data))})
    .catch(error => console.log('error',error));
}

function getWeater(weather) {
   let currentWeather = JSON.parse(weather);
   console.dir(currentWeather);
   if (currentWeather) {
      let Cname= currentWeather.name;
      let Ccountry= currentWeather.sys.country;
      let latitude = currentWeather.coord.lat;
      let longitude= currentWeather.coord.lon;
      let Ctemp = currentWeather.main.temp;
      let Cfeel= currentWeather.main.feels_like;
      let Cmin = currentWeather.main.temp_min;
      let Cmax = currentWeather.main.temp_max;
      let Cweather = currentWeather.weather[0].main;
      let temperature = currentWeather.weather[0].description;
      let humidity = currentWeather.main.humidity;
      let visibility= currentWeather.visibility / 1000;
      let icon = currentWeather.weather[0].icon;

      let city = Cname + ", " + Ccountry;
      let star = "star_border";
      if (localStorage.getItem(city)) {
         star = "star";
      }

      cityName.innerHTML = `<div class="nameleft">${city}</div><div class="nameright"><button class="favbtn" id="favbtn" title="Add city to favorite"><span class="material-icons-outlined" id="star_ico">${star}</span></button></div>`;
      descr.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp} °C`;
      feel.innerHTML = `Feels like:  ${Cfeel} °C`;
      other.innerHTML=   `Humidity: ${humidity}%      -   Visibility:  ${visibility} km`;
      minMax.innerHTML = `<span class="material-icons-outlined">device_thermostat</span>  Min:  ${Cmin} °C  -   Max:  ${Cmax} °C ` ;
      temp.innerHTML =  `<b>${Cweather} </b>(<i>${temperature}</i>)`;

      const container = document.getElementById('background');
      if ( Cweather=== "Clear"){
         container.style.backgroundImage = "url('img/sunny.jfif')";
      }
      else if( Cweather=== "Rain"  || Cweather === "Thunderstorm"  || Cweather === "Drizzle"  ){
         container.style.backgroundImage = "url('img/rainy.jfif')";
      }
      else if( Cweather=== "Snow"){
         container.style.backgroundImage = "url('img/snow.jfif')";
      }
      else{
         container.style.backgroundImage = "url('img/cloudy.jfif')";
      }
      container.style.backgroundSize = "cover";

      const divLoader = document.getElementById('loader');
      divLoader.style.display = "none";

      // Add city as favorite
      let btnFav = document.getElementById("favbtn");
      btnFav.addEventListener('click',function(){
         const starIco = document.getElementById("star_ico");
         if (btnFav.outerText === "star") {
            starIco.innerText = "star_border"
            localStorage.removeItem(city);
         } else {
            starIco.innerText = "star";
            const coord = {lat:currentWeather.coord.lat, lon: currentWeather.coord.lon};
            localStorage.setItem(city,JSON.stringify(coord));
         }
         fillSelect();
      })

   }
}