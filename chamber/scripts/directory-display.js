const url = 'http://127.0.0.1:5500/chamber/data/members.json';
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector('.grid');

gridbutton.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
});

listbutton.addEventListener('click', () => {
    display.classList.add('list');
    display.classList.remove('grid');
});

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.companies);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        const card = document.createElement('div');
        const logo = document.createElement('img');
        const name = document.createElement('p');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const link = document.createElement('a');
        const linkP = document.createElement('p');

        logo.setAttribute('src', `images/${member.icon}.webp`);
        logo.setAttribute('alt', `${member.name} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('height', '200');

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;

        link.textContent = `${member.url}`;
        link.setAttribute('href', member.url);
        linkP.appendChild(link);

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(linkP);

        display.appendChild(card);
    });
}