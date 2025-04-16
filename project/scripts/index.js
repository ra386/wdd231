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
        <p id="brand">Brand: ${car.brand}</p>
        <p id="car">Type: ${car.type} -- ${car.year}</p>
        
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


let bronze = document.getElementById("bronze-modal");
let bronzebtn = document.getElementById("bronzeBtn");
let bronzespan = document.getElementsByClassName("bronzeclose")[0];

bronzebtn.onclick = function() {
    bronze.style.display = "block";
}
bronzespan.onclick = function() {
    bronze.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == bronze) {
        bronze.style.display = "none";
    }
}
