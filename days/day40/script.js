function calculateTip() {
    const bill = parseFloat(document.getElementById("billAmount").value);
    const tip = parseFloat(document.getElementById("tipPercent").value);
    const people = parseInt(document.getElementById("numPeople").value);

    if (isNaN(bill) || isNaN(tip) || isNaN(people) || bill <= 0 || tip < 0 || people <= 0) {
        alert("Please enter valid values!");
        return;
    }

    const totalTip = (bill * tip) / 100;
    const totalPerPerson = (bill + totalTip) / people;

    document.getElementById("totalTip").innerText = totalTip.toFixed(2);
    document.getElementById("perPerson").innerText = totalPerPerson.toFixed(2);
}
