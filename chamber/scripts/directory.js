const lastmod = document.querySelector("#lastmodified");
lastmod.textContent = document.lastModified;



async function fetchMemData() {
    const response = await fetch('data/members.json'); 
    const members = await response.json();
    // console.log(members); 

    const memcard = document.querySelector("#comps"); 

    members.forEach(member => {
        const memSec = document.createElement("section");
        memSec.classList.add('cards');
        memSec.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} company logo ">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
        `;

        memcard.append(memSec);
    });
}
fetchMemData();

const gridview = document.getElementById('gridview');
const listview = document.getElementById('listview');
const comps = document.getElementById('comps');

gridview.addEventListener('click', () => {
    comps.classList.remove('list-view'); 
    comps.classList.add('grid-view'); 
});

listview.addEventListener('click', () => {
    comps.classList.remove('grid-view'); 
    comps.classList.add('list-view'); 
});



const menu = document.querySelector('nav .menu');
const hamburgerButton = document.querySelector('.hamburger');

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
    hamburgerButton.textContent = menu.classList.contains('open') ? '✖' : '☰';
});
 
