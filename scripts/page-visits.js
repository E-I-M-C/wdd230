let visitCount = localStorage.getItem("visits") || 0;
const visitsDisplay = document.querySelector('#visits');

visitCount++
if (visitCount == 1) {
    visitsDisplay.textContent = visitCount;
} else {
    visitsDisplay.textContent = visitCount;
}

localStorage.setItem("visits", visitCount);