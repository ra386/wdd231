const lastmod = document.querySelector("#lastmodified");
lastmod.textContent = document.lastModified;


async function fetchInterest() {
    const response = await fetch('data/intrest.json');
    const intrests = await response.json();
    // console.log(intrests);
    const holder = document.querySelector('#portrait');
    

    intrests.forEach(intrest => {
        const section = document.createElement("section");
        section.classList.add('portrait');
        section.innerHTML = `
        <h2>${intrest.name}</h2>
        <figure>
        <img src="images/${intrest.photo_url}" alt="${intrest.name}" width="300" height="200">
        </figure>
        <address>Location: ${intrest.address}</address>
        <p>${intrest.description}</p>
        <button>Learn More</button>
        `
        holder.append(section);
    });
}
fetchInterest();


const menu = document.querySelector('nav .menu');
const hamburgerButton = document.querySelector('.hamburger');

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
    hamburgerButton.textContent = menu.classList.contains('open') ? '✖' : '☰';
});
 