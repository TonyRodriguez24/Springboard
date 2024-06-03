document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calc-form");
    if (form) {
        const initialValues = setupInitialValues();
        updateMonthlyAmount(initialValues);


        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const currentValues = getCurrentUIValues();
            updateMonthlyAmount(currentValues);
        });
    }
});

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
    const amount = document.getElementById("loan-amount");
    amount.value = 1000;

    const years = document.getElementById("loan-years");
    years.value = 1;

    const rate = document.getElementById("loan-rate");
    rate.value = 5;

    const values = {
        amount: parseFloat(amount.value),
        years: parseFloat(years.value),
        rate: parseFloat(rate.value),
    };

    return values;
}

function getCurrentUIValues() {
  const amount = parseFloat(document.getElementById("loan-amount").value);
  const years = parseFloat(document.getElementById("loan-years").value);
  const rate = parseFloat(document.getElementById("loan-rate").value);

  return {amount, years, rate};
}


// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculatePaymentAmount(values) {
    const principal = values.amount;
    const interest = ((values.rate / 100) / 12);
    const payments = (values.years * 12);

    if (interest === 0) {
      return (principal / payments).toFixed(2);
  }


    const monthlyPayment =
        ((principal * interest) / (1 - Math.pow(1 + interest, -payments)));

    return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthlyAmount(values) {
    const monthlyPayment = document.getElementById("monthly-payment");
    monthlyPayment.innerText = `${calculatePaymentAmount(values)}`;
}