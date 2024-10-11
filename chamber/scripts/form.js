const hiddenElement = document.querySelector('#timestamp');
const formLoadDate = Date.now();

hiddenElement.value = formLoadDate;

const membershipElement = document.querySelector('#membership');
const membershipBenefits = document.querySelector('#membership-benefit');
membershipElement.addEventListener('change', displayMembershipBenefits)

function displayMembershipBenefits() {
    switch (membershipElement.value) {
        case '':
            break;
        case 'np':
            membershipBenefits.textContent = 'Free, for Non Profit Organizations.';
            break;
        case 'bronze':
            membershipBenefits.textContent = '$20 a month. Includes basic services.';
            break;
        case 'silver':
            membershipBenefits.textContent = '$30 a month. Includes most of the available services and some discounts.';
            break;
        case 'gold':
            membershipBenefits.textContent = '$40 a month. Includes discounts and all available services.';
            break;
    }
}