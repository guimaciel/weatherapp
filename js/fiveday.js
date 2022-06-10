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
    
                
    }
    return JSON.parse(currentWeatherHour);
};

function getWeaterDay() {
    const currentWeatherDay = localStorage.getItem('weather');
    
    if (currentWeatherDay){
    
       
    }
    return JSON.parse(currentWeatherDay);
};

console.dir(currentWeatherDay);


