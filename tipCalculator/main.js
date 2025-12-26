const form = document.getElementById("tip-form");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");
const peopleInput = document.getElementById("people");

function calculateTotal(e) {
    e.preventDefault();

    const billValue = Number(billInput.value);
    const tipValue = Number(tipInput.value);
    const peopleValue = Number(peopleInput.value);

    if (billValue <= 0 || tipValue < 0 || peopleValue <= 0) {
        totalSpan.innerText = "—";
        alert("Please enter valid values.");
        return;
    }

    const totalValue = billValue * (1 + tipValue / 100);
    const perPerson = totalValue / peopleValue;

    totalSpan.innerText = perPerson.toFixed(2) + " per person";
}

form.addEventListener("submit", calculateTotal);