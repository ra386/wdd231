function checkLastVisited() {

    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    const storedDateStr = localStorage.getItem("dateLastVisited");

    let welcomeMessage = "";

    console.log("Stored Last Visited Date:" + storedDateStr);

    if (storedDateStr === null) {
        //never visited
        welcomeMessage = ".";
    } else {
        const storedDate = new Date(storedDateStr);
        const timeDiff = new Date() - storedDate;
        // const timeDiff = 186400000;

        if (timeDiff < oneDayInMilliseconds) {
            welcomeMessage = "Back so soon! Awesome!";
        } else {
            const daysCount = Math.ceil(timeDiff / oneDayInMilliseconds);
            if (daysCount === 1) {
                welcomeMessage = `You last booked ${daysCount} day ago.`;
            } else {
                welcomeMessage = `You last booked ${daysCount} days ago.`;
            }
        }
    }

    document.querySelector('#last-booking').textContent = welcomeMessage;
}

function storeDateVisited() {
    localStorage.setItem("dateLastVisited", new Date().toString());
}

checkLastVisited();
storeDateVisited();


const myinfo = new URLSearchParams(window.location.search);
console.log(myinfo);

document.querySelector('#results').innerHTML =`
<h2>Application Details</h2>
<p>Booking for ${myinfo.get('firstName')} ${myinfo.get('lastName')}</p>
<p>For the date of: ${myinfo.get('Apointment')}</p>
<p>Car type: ${myinfo.get('cars')}</p>
<p>Car trouble description: ${myinfo.get('review')}</p>
<p>Contact Info: Phone--${myinfo.get('phone')} || Email-- ${myinfo.get('email')}</p>
`

