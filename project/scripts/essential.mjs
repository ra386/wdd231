const lastmod = document.querySelector("#lastmodified");
lastmod.textContent = `Last Modified: ${document.lastModified}`;

const menu = document.querySelector("#navig");
const hamburgerButton = document.querySelector("#ham");

hamburgerButton.addEventListener('click', () => {
    menu.classList.toggle('active'); 
    hamburgerButton.textContent = menu.classList.contains('active') ? '✖' : '☰';
});