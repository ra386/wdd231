// const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
// const cards = document.querySelector('#cards');

// async function getProphetData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     // console.table(data.prophets); // temporary testing of data response
//   }
  
//   getProphetData();

//   displayProphets(data.prophets)
//   const displayProphets = (prophets) => {
//       prophets.forEach((prophet) => {
//           let card = document.createElement('section');
//           let fullName = document.createElement('h2');
//           let portrait = document.createElement('img');
//           fullName.textContent = `${prophet.lastname} ${prophet.name}`;
//           portrait.setAttribute('src', prophet.imageurl);
//           portrait.setAttribute('alt', `Portrait of ${prophet.lastname} ${prophet.name}`);
//           portrait.setAttribute('loading', 'lazy');
//           portrait.setAttribute('height', '440');
//           card.appendChild(fullName);
//           card.appendChild(portrait);
//           cards.appendChild(card);

//       });
//   }

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); // temporary testing of data response
    displayProphets(data.prophets); // Call displayProphets here, after data is fetched
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; // Fixed the order of name and lastname
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('height', '90%');
        portrait.setAttribute('width', '85%');

        card.appendChild(fullName);
        card.appendChild(portrait);
        cards.appendChild(card);
        cards.style.backgroundcolor ="blue";
        
    });
}

getProphetData(); // Call getProphetData to start the process