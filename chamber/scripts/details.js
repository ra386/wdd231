const myinfo = new URLSearchParams(window.location.search);
// console.log(myinfo);

document.querySelector('#results').innerHTML =`
<p>Merbership request for ${myinfo.get('firstName')} ${myinfo.get('lastName')} for a ${myinfo.get('membership-level')}</p>
<p>Organisation Name: ${myinfo.get('organizationName')}</p>
<p>Organisation Description: ${myinfo.get('review')}</p>
<p>Contact Info: Phone--${myinfo.get('phone')} || Email-- ${myinfo.get('email')}</p>
`

