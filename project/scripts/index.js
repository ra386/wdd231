// Get last modified date
const lastmod = document.querySelector("#lastmodified");
lastmod.textContent = `Last Modified: ${document.lastModified}`;


async function fetchMembers() {
    try{
        const response = await fetch('data/cars.json');
        if (!response.ok) throw new Error('Failed to fetch the cars.json');
        return await response.json();
    } catch (error) {
        console.error('Error fetching cars:', error);
        return[];
    }
    
}

function getSpotlights(cars){
    const eligiblePick = cars.filter(car => car.type === 'Suv'|| car.type === 'Truck'|| car.type === 'Sport' );
    eligiblePick.sort(() => Math.random() - 0.5);
    return eligiblePick.slice(0,3);
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
    // await fetchfive
}
init();

document.getElementById('ham').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
    this.classList.toggle('close-btn');
    
    // Prevent the button from moving
    this.style.transform = 'none';
});