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
        card.innerHTML='
        ';
    })
}