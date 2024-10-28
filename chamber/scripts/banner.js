const banner = document.querySelector('#banner');
const closeBanner = document.querySelector('#close');
const day = new Date(Date.now()).getDay();

if (day != 1 && day != 2 && day != 3) {
    banner.classList.add('hidden');
}

closeBanner.addEventListener('click', () => {
    banner.classList.add('hidden');
});