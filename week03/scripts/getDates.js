const currentYear = document.getElementById("currentyear");
currentYear.innerHTML = new Date().getFullYear();

const dateLastModified = document.getElementById("lastModified");
dateLastModified.innerHTML = `Last Modification: ${document.lastModified}`;