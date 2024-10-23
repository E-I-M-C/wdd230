const link = 'https://e-i-m-c.github.io/wdd230/chamber/data/members.json';
const spotlight = document.querySelector('#spotlight');

async function getMemberData() {
    const response = await fetch(link);
    const data = await response.json();
    displayMembers(data.companies);
}

getMemberData();

const displayMembers = (members) => {
    let temparray = ['', '', ''];
    let count = 0;
    while (count < 3) {
        let randnum = Math.floor(Math.random() * members.length);
        let member = members[randnum];
        if (temparray[count] != member.name && temparray[0] != member.name && temparray[1] != member.name && (member.membership == 'gold' || member.membership == 'silver')) {
            temparray[count] = member.name;
            const section = document.createElement('section');
            const title = document.createElement('h2');
            const hr = document.createElement('hr');
            const email = document.createElement('p');
            const phone = document.createElement('p');
            const website = document.createElement('p');
            const link = document.createElement('a');

            title.textContent = member.name;

            email.textContent = member.email;
            phone.textContent = member.phone;
            link.textContent = member.url;
            link.setAttribute('href', member.url);

            website.appendChild(link);
            section.appendChild(title);
            section.appendChild(hr);
            if (email.textContent != '') {
                section.appendChild(email);
            }
            section.appendChild(phone);
            section.appendChild(website);
            section.classList.add('spotlight');

            spotlight.appendChild(section);
            count++;
        }
    }
}