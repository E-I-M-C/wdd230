const rangevalue = document.querySelector("#rate-num");
const range = document.querySelector("#rate");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}