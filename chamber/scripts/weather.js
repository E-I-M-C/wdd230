const weatherElement = document.querySelector('#weather');
const humidity = document.querySelector('#humidity');
const windChill = document.querySelector('#wind-chill');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=31.87&lon=-116.60&units=imperial&appid=18d09416776cc2570177fe79bb44c2a7';
const urltwo = 'https://api.openweathermap.org/data/2.5/forecast?lat=31.87&lon=-116.60&units=imperial&appid=18d09416776cc2570177fe79bb44c2a7';

async function apiFetchWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayWeatherResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiFetchForecast() {
    try {
        const response = await fetch(urltwo);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayForecastResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchWeather();
apiFetchForecast();

function displayWeatherResults(data) {
    const weatherIcon = document.createElement('img');
    const iconSpan = document.createElement('span');
    const currentTemp = document.createElement('span');
    const captionDesc = document.createElement('p');
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    captionDesc.textContent = `${desc}`;
    iconSpan.append(weatherIcon);

    weatherElement.append(iconSpan);
    currentTemp.appendChild(captionDesc);
    weatherElement.innerHTML += ' ';
    weatherElement.append(currentTemp);

    humidity.textContent = `${data.main.humidity}%`;

    let unit = 'fahrenheit'
    if (data.main.temp <= 10 && unit == 'celsius' && data.wind.speed > 4.8) {
        windChill.textContent = `${calculateWindChill(data.main.temp, data.wind.speed, unit).toFixed(1)} °C`;
    } else if (data.main.temp <= 32 && unit == 'fahrenheit' && data.wind.speed > 4.8) {
        windChill.textContent = `${calculateWindChill(data.main.temp, data.wind.speed, unit).toFixed(1)} °F`;
    } else {
        windChill.textContent = 'N/A';
    }
}

function calculateWindChill(temperature, windSpeed, unit) {
    if (unit == 'fahrenheit') {
        return 0.0817(3.71 * windSpeed ** 0.5 + 5.81 - 0.25 * windSpeed)(temperature - 91.4) + 91.4;
    } else if (unit == 'celsius') {
        return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
    }
}

function displayForecastResults(data) {
    const forecastGrid = document.querySelector('.weather-grid');

    for (let i = 6; i < 30; i += 8) {
        const forecast = data.list[i];
        const forecastDay = document.createElement('div');
        const title = document.createElement('h3');
        const icon = document.createElement('img');
        const temperature = document.createElement('span');
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dayDate = new Date(forecast.dt_txt);
        const iconsrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
        const desc = forecast.weather[0].description;

        title.textContent = `${days[dayDate.getDay()]} ${dayDate.getDate()}`;
        icon.setAttribute('src', iconsrc);
        icon.setAttribute('alt', desc);
        temperature.innerHTML = `${forecast.main.temp}&deg;F`;

        forecastDay.appendChild(title);
        forecastDay.appendChild(icon);
        forecastDay.appendChild(temperature);
        forecastGrid.appendChild(forecastDay);
    }
}