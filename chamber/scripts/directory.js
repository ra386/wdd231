const lastmod = document.querySelector("#lastmodified");
lastmod.textContent = document.lastModified;



async function fetchMemData() {
    const response = await fetch('data/members.json'); // Correct relative path
    const members = await response.json();
    console.log(members); // Debugging: Check if data is loaded

    const memcard = document.querySelector("#comps"); // Ensure this selector matches your HTML

    members.forEach(member => {
        const memSec = document.createElement("section");
        memSec.classList.add('cards');
        memSec.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} company logo ">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">${member.website}</a>
        `;

        memcard.append(memSec);
    });
}
fetchMemData();

// const gridview = document.getElementById('gridview');
// const listview = document.getElementById('listview');
// const comps = document.getElementById('comps');

// gridview.addEventListener('click', () => {
//     members.className = 'grid';
// });

// listView.addEventListener('click', () => {
//     members.className = 'list';
// });


const gridview = document.getElementById('gridview');
const listview = document.getElementById('listview');
const comps = document.getElementById('comps');

gridview.addEventListener('click', () => {
    comps.classList.remove('list-view'); // Remove list view class
    comps.classList.add('grid-view'); // Add grid view class
});

listview.addEventListener('click', () => {
    comps.classList.remove('grid-view'); // Remove grid view class
    comps.classList.add('list-view'); // Add list view class
});