let apiKey = "2eab004f15eb48d53798e50b2bc10057";

const loadWeatherForecast = (lat, lon, unit) => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast/?lat=${lat}&lon=${lon}&units=${unit}&cnt=40&appid=${apiKey}`).then(res=> res.json())
    .then(data => {getWeatherForecast(JSON.stringify(data))})
    .catch(error => console.log('error',error));
}

function getWeatherForecast(weather) {
    weather = JSON.parse(weather);
    if (weather) {
        const containerHour = document.getElementById("container-background-hour");
        const containerForecast = document.getElementById("container-background-forecast");
        containerHour.innerHTML = "";
        containerForecast.innerHTML = "";
        let count = 0;
        let countDay = 0;
        let minTempDay = 999999;
        let maxTempDay = -999999;
        let weatherCond = {};
        for (hourIndex in weather.list) {
            count++;
            const dt = new Date(weather.list[hourIndex].dt * 1000); //.toLocaleString();
            let icon = weather.list[hourIndex].weather[0].icon;
            let unitSymbol = "°" + (vunit === "metric" ? "C" : "F");

            // Forecast 5 days
            if (weatherCond[icon] ? weatherCond[icon]++ : weatherCond[icon] = 1);
            if (minTempDay > weather.list[hourIndex].main.temp_min) minTempDay = weather.list[hourIndex].main.temp_min;
            if (maxTempDay < weather.list[hourIndex].main.temp_max) maxTempDay = weather.list[hourIndex].main.temp_max;

            if (count % 8 === 0) {
                let divDay = document.createElement("div");
                divDay.className = `container-background-forecast-0${++countDay}`;
                
                let weatherAvg = "";
                let weatherAvgValue = 0;
                let weatherAltTxt = "";
                for (index in weatherCond) {
                    if (weatherCond[index] > weatherAvgValue) {
                        weatherAvgValue = weatherCond[index];
                        weatherAvg = index;
                    }
                }

                divDay.innerHTML = `
                <p class="day">${dt.toLocaleDateString()}</p>
                <img src=" http://openweathermap.org/img/wn/${weatherAvg}@2x.png">
                <div class="line"><p class="title">Min: </p><p class="info">${minTempDay}${unitSymbol}</p></div>
                <div class="line"><p class="title">Max: </p><p class="info">${maxTempDay}${unitSymbol}</p></div>
                `
                containerForecast.appendChild(divDay);

                divDay.addEventListener('click', function(){
                    changeHoursForecast(weather,dt);
                });
                
                

                weatherCond = {};
            }           

            if (count === 1) {
                changeHoursForecast(weather,dt);
            }
        }
    }

}

function addHours(dt,hoursAdd) {
    const newDt = new Date();
    newDt.setTime(dt.getTime() + (hoursAdd*60*60*1000));
    return newDt;
}

function changeHoursForecast(weather,dt) {
    const containerHour = document.getElementById("container-background-hour");
    containerHour.innerHTML = "";
    let count = 0;
    let unitSymbol = "°" + (vunit === "metric" ? "C" : "F");
    let checkDate = false;
    for (let hourIndex in weather.list) {
        const dtList = new Date(weather.list[hourIndex].dt * 1000);
        if (dt.toLocaleDateString() === dtList.toLocaleDateString()) {
            checkDate = true;
        }
        if (checkDate && count < 8) {
            count++;
            let icon = weather.list[hourIndex].weather[0].icon;
            let divHour = document.createElement("div");
            divHour.className = `container-background-hour-0${count}`;
            divHour.innerHTML = `
            <p class="date">${dtList.toLocaleDateString()}</p>
            <p class="hours">${dtList.getHours()} - ${addHours(dtList,3).getHours()}</p>
            <img src=" http://openweathermap.org/img/wn/${icon}@2x.png">
            <h1>${weather.list[hourIndex].main.temp}${unitSymbol}</h1>                
            `;
            containerHour.appendChild(divHour);
        }
    }

}
