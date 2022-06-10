let descrh1 = document.querySelector('.descrh1');
let feelh1 = document.querySelector('.feelh1');
let otherh1 = document.querySelector('.otherh1');
let minMaxh1 = document.querySelector('.minmaxh1');
let temph1 = document.querySelector('.temph1');

let descrh2 = document.querySelector('.descrh2');
let feelh2 = document.querySelector('.feelh2');
let otherh2 = document.querySelector('.otherh2');
let minMaxh2 = document.querySelector('.minmaxh2');
let temph2 = document.querySelector('.temph2');

let descrh3 = document.querySelector('.descrh3');
let feelh3 = document.querySelector('.feelh3');
let otherh3 = document.querySelector('.otherh3');
let minMaxh3 = document.querySelector('.minmaxh3');
let temph3 = document.querySelector('.temph3');

let descrh4 = document.querySelector('.descrh4');
let feelh4 = document.querySelector('.feelh4');
let otherh4 = document.querySelector('.otherh4');
let minMaxh4 = document.querySelector('.minmaxh4');
let temph4 = document.querySelector('.temph4');

let descrh5 = document.querySelector('.descrh5');
let feelh5 = document.querySelector('.feelh5');
let otherh5 = document.querySelector('.otherh5');
let minMaxh5 = document.querySelector('.minmaxh5');
let temph5 = document.querySelector('.temph5');

let descrh6 = document.querySelector('.descrh6');
let feelh6 = document.querySelector('.feelh6');
let otherh6 = document.querySelector('.otherh6');
let minMaxh6 = document.querySelector('.minmaxh6');
let temph6 = document.querySelector('.temph6');

let descrh7 = document.querySelector('.descrh7');
let feelh7 = document.querySelector('.feelh7');
let otherh7 = document.querySelector('.otherh7');
let minMaxh7 = document.querySelector('.minmaxh7');
let temph7 = document.querySelector('.temph7');

let descrh8 = document.querySelector('.descrh8');
let feelh8 = document.querySelector('.feelh8');
let otherh8 = document.querySelector('.otherh8');
let minMaxh8 = document.querySelector('.minmaxh8');
let temph8 = document.querySelector('.temph8');

let descrd1 = document.querySelector('.descrd1');
let feeld1 = document.querySelector('.feeld1');
let otherd1 = document.querySelector('.otherd1');
let minMaxd1 = document.querySelector('.minmaxd1');
let tempd1 = document.querySelector('.tempd1');

let descrd2 = document.querySelector('.descrd2');
let feeld2 = document.querySelector('.feeld2');
let otherd2 = document.querySelector('.otherd2');
let minMaxd2 = document.querySelector('.minmaxd2');
let tempd2 = document.querySelector('.tempd2');

let descrd3 = document.querySelector('.descrd3');
let feeld3 = document.querySelector('.feeld3');
let otherd3 = document.querySelector('.otherd3');
let minMaxd3 = document.querySelector('.minmaxd3');
let tempd3 = document.querySelector('.tempd3');

let descrd4 = document.querySelector('.descrd4');
let feeld4 = document.querySelector('.feeld4');
let otherd4 = document.querySelector('.otherd4');
let minMaxd4 = document.querySelector('.minmaxd4');
let tempd4 = document.querySelector('.tempd4');

let descrd5 = document.querySelector('.descrd5');
let feeld5 = document.querySelector('.feeld5');
let otherd5 = document.querySelector('.otherd5');
let minMaxd5 = document.querySelector('.minmaxd5');
let tempd5 = document.querySelector('.tempd5');


function changeUnit(clat, clon, cunit){
   vunit = cunit
   console.log(vunit);
   loadWeater(clat,clon,cunit);
}

const loadWeaterHour = (lat, lon, unit) => {
    fetch('https://api.openweathermap.org/data/2.5/forecast/hourly?lat='+lat+'&lon='+lon+'&units='+unit+'&appid=6fe6f8dc9f3b29c275f458284bb12fcd'+'&cnt=8').then(res=> res.json())
    .then(data => {getWeaterHour(JSON.stringify(data))})
    .catch(error => console.log('error',error));
}

const loadWeaterDay = (lat, lon, unit) => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&units='+unit+'&cnt=5'+'&appid=6fe6f8dc9f3b29c275f458284bb12fcd').then(res=> res.json())
    .then(data => {getWeaterDay(JSON.stringify(data))})
    .catch(error => console.log('error',error));
}

function getWeaterHour() {
    const currentWeatherHour = localStorage.getItem('weather');
    
    if (currentWeatherHour){

        let latitude = currentWeather.coord.lat;
        let longitude= currentWeather.coord.lon;
        let simbol = "";
        let Ctemp = currentWeather.main.temp;
        let icon = currentWeather.weather[0].icon;

        let Cfeel1= currentWeather.main.feels_like[0];
        let Cfeel2= currentWeather.main.feels_like[1];
        let Cfeel3= currentWeather.main.feels_like[2];
        let Cfeel4= currentWeather.main.feels_like[3];
        let Cfeel5= currentWeather.main.feels_like[4];
        let Cfeel6= currentWeather.main.feels_like[5];
        let Cfeel7= currentWeather.main.feels_like[6];
        let Cfeel8= currentWeather.main.feels_like[7];

        let Cmin1 = currentWeather.main.temp_min[0];
        let Cmin2 = currentWeather.main.temp_min[1];
        let Cmin3 = currentWeather.main.temp_min[2];
        let Cmin4 = currentWeather.main.temp_min[3];
        let Cmin5 = currentWeather.main.temp_min[4];
        let Cmin6 = currentWeather.main.temp_min[5];
        let Cmin7 = currentWeather.main.temp_min[6];
        let Cmin8 = currentWeather.main.temp_min[7];
        
        let Cmax1 = currentWeather.main.temp_max[0];
        let Cmax2 = currentWeather.main.temp_max[1];
        let Cmax3 = currentWeather.main.temp_max[2];
        let Cmax4 = currentWeather.main.temp_max[3];
        let Cmax5 = currentWeather.main.temp_max[4];
        let Cmax6 = currentWeather.main.temp_max[5];
        let Cmax7 = currentWeather.main.temp_max[6];
        let Cmax8 = currentWeather.main.temp_max[7];
        
        let Cweather1 = currentWeather.weather[0].main;
        let Cweather2 = currentWeather.weather[1].main;
        let Cweather3 = currentWeather.weather[2].main;
        let Cweather4 = currentWeather.weather[3].main;
        let Cweather5 = currentWeather.weather[4].main;
        let Cweather6 = currentWeather.weather[5].main;
        let Cweather7 = currentWeather.weather[6].main;
        let Cweather8 = currentWeather.weather[7].main;
        
        let temperature1 = currentWeather.weather[0].description;
        let temperature2 = currentWeather.weather[1].description;
        let temperature3 = currentWeather.weather[2].description;
        let temperature4 = currentWeather.weather[3].description;
        let temperature5 = currentWeather.weather[4].description;
        let temperature6 = currentWeather.weather[5].description;
        let temperature7 = currentWeather.weather[6].description;
        let temperature8 = currentWeather.weather[7].description;
        
        let humidity1 = currentWeather.main.humidity[0];
        let humidity2 = currentWeather.main.humidity[1];
        let humidity3 = currentWeather.main.humidity[2];
        let humidity4 = currentWeather.main.humidity[3];
        let humidity5 = currentWeather.main.humidity[4];
        let humidity6 = currentWeather.main.humidity[5];
        let humidity7 = currentWeather.main.humidity[6];
        let humidity8 = currentWeather.main.humidity[7];
        
    

        if (vunit === "imperial"){
            simbol = "°F";         
            descriptionh1.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp1} <span> °F | </span>  <a href="#" onClick="return changeUnit(${latitude}, ${longitude},'metric')"> °C </a>`;
            descriptionh2.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp2} <span> °F | </span>  <a href="#" onClick="return changeUnit(${latitude}, ${longitude},'metric')"> °C </a>`;
            descriptionh3.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp3} <span> °F | </span>  <a href="#" onClick="return changeUnit(${latitude}, ${longitude},'metric')"> °C </a>`;
            descriptionh4.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp4} <span> °F | </span>  <a href="#" onClick="return changeUnit(${latitude}, ${longitude},'metric')"> °C </a>`;
            descriptionh5.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp5} <span> °F | </span>  <a href="#" onClick="return changeUnit(${latitude}, ${longitude},'metric')"> °C </a>`;
            descriptionh6.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp6} <span> °F | </span>  <a href="#" onClick="return changeUnit(${latitude}, ${longitude},'metric')"> °C </a>`;
            descriptionh7.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp7} <span> °F | </span>  <a href="#" onClick="return changeUnit(${latitude}, ${longitude},'metric')"> °C </a>`;
            descriptionh8.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp8} <span> °F | </span>  <a href="#" onClick="return changeUnit(${latitude}, ${longitude},'metric')"> °C </a>`;
        }
        else{
        simbol = "°C";
        descriptionh1.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp1} <span>°C | </span>    <a href="#" onClick=" return changeUnit(${latitude}, ${longitude},'imperial')">°F </a>`;
        descriptionh2.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp2} <span>°C | </span>    <a href="#" onClick=" return changeUnit(${latitude}, ${longitude},'imperial')">°F </a>`;
        descriptionh3.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp3} <span>°C | </span>    <a href="#" onClick=" return changeUnit(${latitude}, ${longitude},'imperial')">°F </a>`;
        descriptionh4.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp4} <span>°C | </span>    <a href="#" onClick=" return changeUnit(${latitude}, ${longitude},'imperial')">°F </a>`;
        descriptionh5.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp5} <span>°C | </span>    <a href="#" onClick=" return changeUnit(${latitude}, ${longitude},'imperial')">°F </a>`;
        descriptionh6.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp6} <span>°C | </span>    <a href="#" onClick=" return changeUnit(${latitude}, ${longitude},'imperial')">°F </a>`;
        descriptionh7.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp7} <span>°C | </span>    <a href="#" onClick=" return changeUnit(${latitude}, ${longitude},'imperial')">°F </a>`;
        descriptionh8.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp}8 <span>°C | </span>    <a href="#" onClick=" return changeUnit(${latitude}, ${longitude},'imperial')">°F </a>`;
        }
               
        feelh1.innerHTML = `<b>Feels like:</b>  ${Cfeel1} ${simbol}`;
        feelh2.innerHTML = `<b>Feels like:</b>  ${Cfeel2} ${simbol}`;
        feelh3.innerHTML = `<b>Feels like:</b>  ${Cfeel3} ${simbol}`;
        feelh4.innerHTML = `<b>Feels like:</b>  ${Cfeel4} ${simbol}`;
        feelh5.innerHTML = `<b>Feels like:</b>  ${Cfeel5} ${simbol}`;
        feelh6.innerHTML = `<b>Feels like:</b>  ${Cfeel6} ${simbol}`;
        feelh7.innerHTML = `<b>Feels like:</b>  ${Cfeel7} ${simbol}`;
        feelh8.innerHTML = `<b>Feels like:</b>  ${Cfeel8} ${simbol}`;
        
        otherh1.innerHTML=   `<b>Humidity:</b> ${humidity1}%      -   <b>Visibility:</b>  ${visibility} km`;
        otherh2.innerHTML=   `<b>Humidity:</b> ${humidity2}%      -   <b>Visibility:</b>  ${visibility} km`;
        otherh3.innerHTML=   `<b>Humidity:</b> ${humidity3}%      -   <b>Visibility:</b>  ${visibility} km`;
        otherh4.innerHTML=   `<b>Humidity:</b> ${humidity4}%      -   <b>Visibility:</b>  ${visibility} km`;
        otherh5.innerHTML=   `<b>Humidity:</b> ${humidity5}%      -   <b>Visibility:</b>  ${visibility} km`;
        otherh6.innerHTML=   `<b>Humidity:</b> ${humidity6}%      -   <b>Visibility:</b>  ${visibility} km`;
        otherh7.innerHTML=   `<b>Humidity:</b> ${humidity7}%      -   <b>Visibility:</b>  ${visibility} km`;
        otherh8.innerHTML=   `<b>Humidity:</b> ${humidity8}%      -   <b>Visibility:</b>  ${visibility} km`;

        minMaxh1.innerHTML = `<span class="material-icons-outlined">device_thermostat</span> <b> Min:</b>  ${Cmin1} ${simbol}  -   <b>Max:</b>  ${Cmax1} ${simbol} ` ;
        minMaxh2.innerHTML = `<span class="material-icons-outlined">device_thermostat</span> <b> Min:</b>  ${Cmin2} ${simbol}  -   <b>Max:</b>  ${Cmax2} ${simbol} ` ;
        minMaxh3.innerHTML = `<span class="material-icons-outlined">device_thermostat</span> <b> Min:</b>  ${Cmin3} ${simbol}  -   <b>Max:</b>  ${Cmax3} ${simbol} ` ;
        minMaxh4.innerHTML = `<span class="material-icons-outlined">device_thermostat</span> <b> Min:</b>  ${Cmin4} ${simbol}  -   <b>Max:</b>  ${Cmax4} ${simbol} ` ;
        minMaxh5.innerHTML = `<span class="material-icons-outlined">device_thermostat</span> <b> Min:</b>  ${Cmin5} ${simbol}  -   <b>Max:</b>  ${Cmax5} ${simbol} ` ;
        minMaxh6.innerHTML = `<span class="material-icons-outlined">device_thermostat</span> <b> Min:</b>  ${Cmin6} ${simbol}  -   <b>Max:</b>  ${Cmax6} ${simbol} ` ;
        minMaxh7.innerHTML = `<span class="material-icons-outlined">device_thermostat</span> <b> Min:</b>  ${Cmin7} ${simbol}  -   <b>Max:</b>  ${Cmax7} ${simbol} ` ;
        minMaxh8.innerHTML = `<span class="material-icons-outlined">device_thermostat</span> <b> Min:</b>  ${Cmin8} ${simbol}  -   <b>Max:</b>  ${Cmax8} ${simbol} ` ;

        temperatureh1.innerHTML =  `<b>${Cweather1} </b>(<i>${temperature1}</i>)`;
        temperatureh2.innerHTML =  `<b>${Cweather2} </b>(<i>${temperature2}</i>)`;
        temperatureh3.innerHTML =  `<b>${Cweather3} </b>(<i>${temperature3}</i>)`;
        temperatureh4.innerHTML =  `<b>${Cweather4} </b>(<i>${temperature4}</i>)`;
        temperatureh5.innerHTML =  `<b>${Cweather5} </b>(<i>${temperature5}</i>)`;
        temperatureh6.innerHTML =  `<b>${Cweather6} </b>(<i>${temperature6}</i>)`;
        temperatureh7.innerHTML =  `<b>${Cweather7} </b>(<i>${temperature7}</i>)`;
        temperatureh8.innerHTML =  `<b>${Cweather8} </b>(<i>${temperature8}</i>)`;
                
    }
    return JSON.parse(currentWeatherHour);
};

function getWeaterDay() {
    const currentWeatherDay = localStorage.getItem('weather');
    
    if (currentWeatherDay){
S
        let latitude = currentWeather.coord.lat;
        let longitude= currentWeather.coord.lon;
        let simbol = "";
        let icon = currentWeather.weather[0].icon;


        let Ctemp1 = currentWeather.main.temp[0];
        let Ctemp2 = currentWeather.main.temp[1];
        let Ctemp3 = currentWeather.main.temp[2];
        let Ctemp4 = currentWeather.main.temp[3];
        let Ctemp5 = currentWeather.main.temp[4];

        let Cfeel1= currentWeather.main.feels_like[0];
        let Cfeel2= currentWeather.main.feels_like[1];
        let Cfeel3= currentWeather.main.feels_like[2];
        let Cfeel4= currentWeather.main.feels_like[3];
        let Cfeel5= currentWeather.main.feels_like[4];
        
        let Cmin1 = currentWeather.main.temp_min[0];
        let Cmin2 = currentWeather.main.temp_min[1];
        let Cmin3 = currentWeather.main.temp_min[2];
        let Cmin4 = currentWeather.main.temp_min[3];
        let Cmin5 = currentWeather.main.temp_min[4];
        
        let Cmax1 = currentWeather.main.temp_max[0];
        let Cmax2 = currentWeather.main.temp_max[1];
        let Cmax3 = currentWeather.main.temp_max[2];
        let Cmax4 = currentWeather.main.temp_max[3];
        let Cmax5 = currentWeather.main.temp_max[4];
        
        let Cweather1 = currentWeather.weather[0].main[0];
        let Cweather2 = currentWeather.weather[0].main[1];
        let Cweather3 = currentWeather.weather[0].main[2];
        let Cweather4 = currentWeather.weather[0].main[3];
        let Cweather5 = currentWeather.weather[0].main[4];
        
        let temperature1 = currentWeather.weather[0].description[0];
        let temperature2 = currentWeather.weather[0].description[1];
        let temperature3 = currentWeather.weather[0].description[2];
        let temperature4 = currentWeather.weather[0].description[3];
        let temperature5 = currentWeather.weather[0].description[4];
        
        let humidity1 = currentWeather.main.humidity[0];
        let humidity2 = currentWeather.main.humidity[1];
        let humidity3 = currentWeather.main.humidity[2];
        let humidity4 = currentWeather.main.humidity[3];
        let humidity5 = currentWeather.main.humidity[4];
        
            

        if (vunit === "imperial"){
            simbol = "°F";         
            descriptiond1.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp1} <span> °F | </span>  <a href="#" onClick="return changeUnit(${latitude}, ${longitude},'metric')"> °C </a>`;
            descriptiond2.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp2} <span> °F | </span>  <a href="#" onClick="return changeUnit(${latitude}, ${longitude},'metric')"> °C </a>`;
            descriptiond3.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp3} <span> °F | </span>  <a href="#" onClick="return changeUnit(${latitude}, ${longitude},'metric')"> °C </a>`;
            descriptiond4.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp4} <span> °F | </span>  <a href="#" onClick="return changeUnit(${latitude}, ${longitude},'metric')"> °C </a>`;
            descriptiond5.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp5} <span> °F | </span>  <a href="#" onClick="return changeUnit(${latitude}, ${longitude},'metric')"> °C </a>`;
        }
        else{
        simbol = "°C";
        descriptiond1.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp1} <span>°C | </span>    <a href="#" onClick=" return changeUnit(${latitude}, ${longitude},'imperial')">°F </a>`;
        descriptiond2.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp2} <span>°C | </span>    <a href="#" onClick=" return changeUnit(${latitude}, ${longitude},'imperial')">°F </a>`;
        descriptiond3.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp3} <span>°C | </span>    <a href="#" onClick=" return changeUnit(${latitude}, ${longitude},'imperial')">°F </a>`;
        descriptiond4.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp4} <span>°C | </span>    <a href="#" onClick=" return changeUnit(${latitude}, ${longitude},'imperial')">°F </a>`;
        descriptiond5.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}@2x.png"> ${Ctemp5} <span>°C | </span>    <a href="#" onClick=" return changeUnit(${latitude}, ${longitude},'imperial')">°F </a>`;
        }
               
        feelh1.innerHTML = `<b>Feels like:</b>  ${Cfeel1} ${simbol}`;
        feeld2.innerHTML = `<b>Feels like:</b>  ${Cfeel2} ${simbol}`;
        feeld3.innerHTML = `<b>Feels like:</b>  ${Cfeel3} ${simbol}`;
        feeld4.innerHTML = `<b>Feels like:</b>  ${Cfeel4} ${simbol}`;
        feeld5.innerHTML = `<b>Feels like:</b>  ${Cfeel5} ${simbol}`;
        
        otherd1.innerHTML=   `<b>Humidity:</b> ${humidity1}%      -   <b>Visibility:</b>  ${visibility1} km`;
        otherd2.innerHTML=   `<b>Humidity:</b> ${humidity2}%      -   <b>Visibility:</b>  ${visibility2} km`;
        otherd3.innerHTML=   `<b>Humidity:</b> ${humidity3}%      -   <b>Visibility:</b>  ${visibility3} km`;
        otherd4.innerHTML=   `<b>Humidity:</b> ${humidity4}%      -   <b>Visibility:</b>  ${visibility4} km`;
        otherd5.innerHTML=   `<b>Humidity:</b> ${humidity5}%      -   <b>Visibility:</b>  ${visibility5} km`;
        
        minMaxd1.innerHTML = `<span class="material-icons-outlined">device_thermostat</span> <b> Min:</b>  ${Cmin1} ${simbol}  -   <b>Max:</b>  ${Cmax1} ${simbol} ` ;
        minMaxd2.innerHTML = `<span class="material-icons-outlined">device_thermostat</span> <b> Min:</b>  ${Cmin2} ${simbol}  -   <b>Max:</b>  ${Cmax2} ${simbol} ` ;
        minMaxd3.innerHTML = `<span class="material-icons-outlined">device_thermostat</span> <b> Min:</b>  ${Cmin3} ${simbol}  -   <b>Max:</b>  ${Cmax3} ${simbol} ` ;
        minMaxd4.innerHTML = `<span class="material-icons-outlined">device_thermostat</span> <b> Min:</b>  ${Cmin4} ${simbol}  -   <b>Max:</b>  ${Cmax4} ${simbol} ` ;
        minMaxd5.innerHTML = `<span class="material-icons-outlined">device_thermostat</span> <b> Min:</b>  ${Cmin5} ${simbol}  -   <b>Max:</b>  ${Cmax5} ${simbol} ` ;

        temperatured1.innerHTML =  `<b>${Cweather1} </b>(<i>${temperature1}</i>)`;
        temperatured2.innerHTML =  `<b>${Cweather2} </b>(<i>${temperature2}</i>)`;
        temperatured3.innerHTML =  `<b>${Cweather3} </b>(<i>${temperature3}</i>)`;
        temperatured4.innerHTML =  `<b>${Cweather4} </b>(<i>${temperature4}</i>)`;
        temperatured5.innerHTML =  `<b>${Cweather5} </b>(<i>${temperature5}</i>)`;
    
       
    }
    return JSON.parse(currentWeatherDay);
};

console.dir(currentWeatherDay);


