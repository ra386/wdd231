import { setupHamburgerMenu } from "./ham.mjs";
import { updateLastModified } from "./last-modified.mjs";
import { fetchMembers } from "./cars-data.mjs";  
updateLastModified();
setupHamburgerMenu();

function getSpotlights(cars){
    const eligiblePick = cars.filter(car => car.type === 'Suv'|| car.type === 'Truck'|| car.type === 'Sport' );
    eligiblePick.sort(() => Math.random() - 0.5);
    return eligiblePick.slice(0,4);
}

function displaySpotlights(spotlights) {
    const spotlightContainer = document.getElementById('randomCards');
    spotlightContainer.innerHTML = '';

    spotlights.forEach(car => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');
        card.innerHTML=`
        <img src="images/${car.imagesrc}" alt="${car.description}" loading="lazy">
        <h2>${car.name}</h2>
        <p>Type: ${car.type}</p>
        <p>Year: ${car.year}</p>
        <p>Brand: ${car.brand}</p>
        `;

        spotlightContainer.appendChild(card);
    });
}

async function init() {
    const cars = await fetchMembers();
    const spotlights = getSpotlights(cars)
    displaySpotlights(spotlights)
    
}
init();
