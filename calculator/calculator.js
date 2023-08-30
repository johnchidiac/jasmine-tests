window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const currentValues = getCurrentUIValues();
  calculateMonthlyPayment(currentValues.amount, currentValues.years, currentValues.rate);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  const monthly = calculateMonthlyPayment(currentValues.amount, currentValues.years, currentValues.rate);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(amount, years, rate) {
  const top = (amount * rate / 100 / 12);
  const annualMultiplier = 1 + (rate / 100 / 12);
  const exponent = -(years * 12);
  const right = Math.pow(annualMultiplier, exponent)
  const bottom = 1 - right;
  const payment = Math.round(top / bottom * 100) / 100;
  return payment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentContainer = document.getElementById('monthly-payment');
  monthlyPaymentContainer.innerText = monthly;
}
