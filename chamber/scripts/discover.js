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
        <img src="images/${intrest.photo_url}" alt="${intrest.name}"loading="lazy" width="300" height="200">
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
 
   
   const path = window.location.pathname;
   const currentPage = path.substring(path.lastIndexOf('/') + 1);
   const navLinks = document.querySelectorAll('.menu a');
   
   navLinks.forEach(link => {
       const href = link.getAttribute('href');
       if (currentPage === href) {
           link.classList.add('active');
       }
});

function checkLastVisited() {

    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    const storedDateStr = localStorage.getItem("dateLastVisited");

    let welcomeMessage = "";

    console.log("Stored Last Visited Date:" + storedDateStr);

    if (storedDateStr === null) {
        //never visited
        welcomeMessage = "Welcome! Let us know if you have any questions.";
    } else {
        const storedDate = new Date(storedDateStr);
        const timeDiff = new Date() - storedDate;
        // const timeDiff = 186400000;

        if (timeDiff < oneDayInMilliseconds) {
            welcomeMessage = "Back so soon! Awesome!";
        } else {
            const daysCount = Math.ceil(timeDiff / oneDayInMilliseconds);
            if (daysCount === 1) {
                welcomeMessage = `You last visited ${daysCount} day ago.`;
            } else {
                welcomeMessage = `You last visited ${daysCount} days ago.`;
            }
        }
    }

    document.querySelector('#welcome-message').textContent = welcomeMessage;
}

function storeDateVisited() {
    localStorage.setItem("dateLastVisited", new Date().toString());
}

checkLastVisited();
storeDateVisited();
