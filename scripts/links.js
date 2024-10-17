const baseURL = "https://e-i-m-c.github.io/wdd230/";
const linksURL = "https://e-i-m-c.github.io/wdd230/data/links.json";
const ul = document.querySelector("#weeks");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data.weeks);
}

getLinks();

function displayLinks(weeks) {
    weeks.forEach((week) => {
        const li = document.createElement("li");
        li.innerHTML = `${week.week}: `;
        let firstLink = true;
        week.links.forEach((link) => {
            const a = document.createElement("a");
            a.setAttribute("href", link.url);
            a.textContent = link.title;
            if (firstLink) {
                li.appendChild(a);
                firstLink = false;
            } else {
                li.innerHTML += ` | `;
                li.appendChild(a);
            }
        });
        ul.appendChild(li);
    });
}