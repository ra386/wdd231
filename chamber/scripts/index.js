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
      // console.log(info); 
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
        // console.log(data); 
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



  async function fetchMembers() {
    try {
        const response = await fetch('data/members.json'); // Fetch JSON data from the directory
        if (!response.ok) throw new Error('Failed to fetch members.json');
        return await response.json();
    } catch (error) {
        console.error('Error fetching members:', error);
        return [];
    }
}

function getSpotlights(members) {
  // Change membershipLevel to membership_level to match your JSON
  const eligibleMembers = members.filter(member => member.membership_level === 2 || member.membership_level === 3);
  
  eligibleMembers.sort(() => Math.random() - 0.5);
  return eligibleMembers.slice(0, 3);
}

function displaySpotlights(spotlights) {
  const spotlightContainer = document.getElementById('spotlight-container');
  spotlightContainer.innerHTML = '';

  spotlights.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('spotlight-card');
      card.innerHTML = `
          <h3>${member.name}</h3>
          <img src="images/${member.image}" alt="${member.name}">
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
          <p>Membership Level: ${member.membership_level === 2 ? 'Silver' : 'Gold'}</p>
      `;
      
    
      
      spotlightContainer.appendChild(card);
  });
}

async function init() {
    const members = await fetchMembers();
    const spotlights = getSpotlights(members);
    displaySpotlights(spotlights);
    await fetchfive();
    
}
init();


document.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('.menu');
  const hamburgerButton = document.querySelector('.hamburger');

  hamburgerButton.addEventListener('click', () => {
      menu.classList.toggle('open');
      hamburgerButton.classList.toggle('open');
      hamburgerButton.textContent = menu.classList.contains('open') ? '✖' : '☰';
  });
});

const lastmod = document.querySelector("#lastmodified");
lastmod.textContent = `Last Modified: ${document.lastModified}`;