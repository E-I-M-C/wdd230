const weatherElement = document.querySelector('#weather');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=31.87&lon=-116.60&units=imperial&appid=18d09416776cc2570177fe79bb44c2a7';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    const weatherIcon = document.createElement('img');
    const currentTemp = document.createElement('span');
    const captionDesc = document.createElement('span');
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    captionDesc.textContent = `${desc}`;

    weatherElement.appendChild(weatherIcon);
    weatherElement.appendChild(currentTemp);
    weatherElement.innerHTML += ' - ';
    weatherElement.appendChild(captionDesc);
}