import { setupHamburgerMenu } from "./ham.mjs";
import { updateLastModified } from "./last-modified.mjs";
import { fetchMembers } from "./cars-data.mjs";  
updateLastModified();
setupHamburgerMenu();






document.addEventListener('DOMContentLoaded', async () => {
    try {
        const cars = await fetchMembers();
        
        // Display all cars initially
        displayCars(cars);
        
        // Set up filter buttons
        setupFilterButtons(cars);
    } catch (error) {
        console.error('Error loading cars:', error);
    }
});

function displayCars(carsToDisplay) {
    const catalogueDiv = document.getElementById('Catalogue');
    
   
    catalogueDiv.innerHTML = '';
    
    carsToDisplay.forEach(car => {
        
        if (!car.imagesrc) return;
        
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        
        carCard.innerHTML = `
            <img src="images/${car.imagesrc}" alt="${car.description}" loading="lazy">
            <h3>${car.name}</h3>
            <p>${car.brand} - ${car.year}</p>
            <p>Type: ${car.type}</p>
        `;
        
        catalogueDiv.appendChild(carCard);
    });
}




function setupFilterButtons(allCars) {
    // Get all filter buttons
    const allBtn = document.getElementById('all');
    const sportBtn = document.getElementById('sport');
    const suvBtn = document.getElementById('suv');
    const trucksBtn = document.getElementById('Trucks');
    const sedanBtn = document.getElementById('sedan');
    
    // Add event listeners to each button
    allBtn.addEventListener('click', () => displayCars(allCars));
    
    sportBtn.addEventListener('click', () => {
        const sportCars = allCars.filter(car => car.type.toLowerCase() === 'sport');
        displayCars(sportCars);
    });
    
    suvBtn.addEventListener('click', () => {
        const suvCars = allCars.filter(car => car.type.toLowerCase() === 'suv');
        displayCars(suvCars);
    });
    
    trucksBtn.addEventListener('click', () => {
        const truckCars = allCars.filter(car => car.type.toLowerCase() === 'truck');
        displayCars(truckCars);
    });
    
    sedanBtn.addEventListener('click', () => {
        const sedanCars = allCars.filter(car => car.type.toLowerCase() === 'sedan');
        displayCars(sedanCars);
    });
}