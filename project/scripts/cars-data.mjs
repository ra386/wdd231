// cars-data.mjs
export async function fetchMembers() {
    try {
        const response = await fetch('data/cars.json');
        if (!response.ok) throw new Error('Failed to fetch the cars.json');
        return await response.json();
    } catch (error) {
        console.error('Error fetching cars:', error);
        return [];
    }
}