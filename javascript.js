// Get the slider input elements
const incomeSlider = document.getElementById("income");
const creditCardPaymentSlider = document.getElementById("creditCardPayment");
// Get the value display elements
const incomeValue = document.getElementById("incomeValue");
const creditCardPaymentValue = document.getElementById("creditCardPaymentValue");

// Display the default values on page load
incomeValue.innerHTML = incomeSlider.value;
creditCardPaymentValue.innerHTML = creditCardPaymentSlider.value;

// Update the value displays when the slider values change
incomeSlider.oninput = function() {
    incomeValue.innerHTML = this.value;
};

creditCardPaymentSlider.oninput = function() {
    creditCardPaymentValue.innerHTML = this.value;
};

// Add similar code for the other sliders as needed
