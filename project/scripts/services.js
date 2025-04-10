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


