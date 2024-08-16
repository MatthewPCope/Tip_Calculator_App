// Get references to the buttons and inputs
const five = document.querySelector('#five');
const ten = document.querySelector('#ten');
const fifteen = document.querySelector('#fifteen');
const twentyFive = document.querySelector('#twenty-five');
const fifty = document.querySelector('#fifty');
const customTipInput = document.querySelector('.custom');
const billInput = document.querySelector('#bill');
const peopleInput = document.querySelector('.people-number-section input');
const resetButton = document.querySelector('.btn-reset');
const tipAmountDisplay = document.querySelector('.tip-amount .amounts');
const totalAmountDisplay = document.querySelector('.total .amounts');

// Function to calculate the tip and total amount per person
function calculateTip(tipPercentage) {
    const bill = parseFloat(billInput.value);
    const people = parseInt(peopleInput.value);
    if (isNaN(bill) || isNaN(people) || people <= 0) {
        return;
    }

    const tipAmount = (bill * (tipPercentage / 100)) / people;
    const totalAmount = (bill / people) + tipAmount;

    tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
    totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
}

// Event listeners for the tip buttons
five.addEventListener('click', () => calculateTip(5));
ten.addEventListener('click', () => calculateTip(10));
fifteen.addEventListener('click', () => calculateTip(15));
twentyFive.addEventListener('click', () => calculateTip(25));
fifty.addEventListener('click', () => calculateTip(50));

// Event listener for the custom tip input
customTipInput.addEventListener('input', () => {
    const customTip = parseFloat(customTipInput.value);
    if (!isNaN(customTip)) {
        calculateTip(customTip);
    }
});

// Event listener for the reset button
resetButton.addEventListener('click', () => {
    billInput.value = '';
    peopleInput.value = '';
    customTipInput.value = '';
    tipAmountDisplay.textContent = '$0.00';
    totalAmountDisplay.textContent = '$0.00';
});