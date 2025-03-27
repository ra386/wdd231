// Current weather
const weathericon = document.querySelector('#weather-icon');
const temp = document.querySelector('#temp');
const climate = document.querySelector('#climate');
const high = document.querySelector('#high');
const low = document.querySelector('#low');
const humidity = document.querySelector('#hum');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');




const wtoday = document.querySelector('#wtoday');
const tomorrow = document.querySelector('#wtomorrow');
const dayafter = document.querySelector('#wintwo');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=4.07&lon=9.68&units=metric&appid=342b74d3212f1cbc071c06e243044b2e';

const fivedaysUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=4.07&lon=9.68&units=metric&APPID=9d8f9f51264b784b07894be4b5efffe9';



async function fetchfive() {
  try {
    const result = await fetch(fivedaysUrl);
    if (result.ok) {
      const info = await result.json();
      console.log(info); // testing only
      displayForcast(info); // uncomment when ready
    } else {
        throw Error(await result.text());
    }
  } catch (error) {
      console.log(error);
  }
}

fetchfive();

function displayForcast(info) {
  // const wtoday = info.list[0];
  wtoday.innerHTML = `${info.list[0].main.temp_max}&deg;C`;
  tomorrow.innerHTML = `${info.list[8].main.temp_max}&deg;C`;
  dayafter.innerHTML = `${info.list[16].main.temp_max}&deg;C`;


}


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function convertUnixToHHMM(unixTime) {
    let date = new Date(unixTime * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let mornOrAft = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${mornOrAft}`;
  }


  function displayResults(data) {
    temp.innerHTML = `${data.main.temp}&deg;C`;
    climate.innerHTML = data.weather[0].description;
    high.innerHTML = `${data.main.temp_max}`;
    low.innerHTML = `${data.main.temp_min}`;
    humidity.innerHTML = `${data.main.humidity}`;

    sunrise.innerHTML = convertUnixToHHMM(data.sys.sunrise);
    sunset.innerHTML = convertUnixToHHMM(data.sys.sunset);

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weathericon.setAttribute('src', iconsrc);
    weathericon.setAttribute('alt', data.weather[0].description);

  }


  // Random Top level cards to display

  