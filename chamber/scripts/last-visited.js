// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 86400000;
const lastVisitedElement = document.querySelector("#last-visited");
const lastVisited = new Date(Date.parse(localStorage.getItem("lastVisited"))) || new Date();
const today = new Date();
// find the difference between each of the times in ms and convert to days
let daysBetween = lastVisited.getTime() - Date.now();
if (daysBetween.toFixed(0) != 0) {
    daysBetween = daysBetween / msToDays;
}
// display the correct
if (daysBetween < 1) {
    lastVisitedElement.textContent = "Back so soon! Awesome!";
} else if (daysBetween > 1) {
    lastVisitedElement.textContent = `You last visited ${daysBetween.toFixed(0)} days ago.`;
} else {
    lastVisitedElement.textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem("lastVisited", today);