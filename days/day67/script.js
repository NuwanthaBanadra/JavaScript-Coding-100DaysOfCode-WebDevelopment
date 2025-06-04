const typeSelect = document.getElementById("type");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const input = document.getElementById("input");
const output = document.getElementById("output");

const units = {
    length: ["meters", "kilometers", "miles"],
    weight: ["grams", "kilograms", "pounds"],
    temperature: ["celsius", "fahrenheit", "kelvin"]
};

const conversions = {
    length: {
        meters: { meters: 1, kilometers: 0.001, miles: 0.000621371 },
        kilometers: { meters: 1000, kilometers: 1, miles: 0.621371 },
        miles: { meters: 1609.34, kilometers: 1.60934, miles: 1 }
    },
    weight: {
        grams: { grams: 1, kilograms: 0.001, pounds: 0.00220462 },
        kilograms: { grams: 1000, kilograms: 1, pounds: 2.20462 },
        pounds: { grams: 453.592, kilograms: 0.453592, pounds: 1 }
    },
    temperature: {
        convert(val, from, to) {
            if (from === to) return val;
            if (from === "celsius") {
                if (to === "fahrenheit") return val * 9 / 5 + 32;
                if (to === "kelvin") return val + 273.15;
            }
            if (from === "fahrenheit") {
                if (to === "celsius") return (val - 32) * 5 / 9;
                if (to === "kelvin") return (val - 32) * 5 / 9 + 273.15;
            }
            if (from === "kelvin") {
                if (to === "celsius") return val - 273.15;
                if (to === "fahrenheit") return (val - 273.15) * 9 / 5 + 32;
            }
        }
    }
};

function populateUnits(type) {
    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";
    units[type].forEach(unit => {
        const opt1 = new Option(unit, unit);
        const opt2 = new Option(unit, unit);
        fromUnit.add(opt1);
        toUnit.add(opt2);
    });
}

function convert() {
    const type = typeSelect.value;
    const from = fromUnit.value;
    const to = toUnit.value;
    const val = parseFloat(input.value);

    if (isNaN(val)) {
        output.textContent = "Invalid input";
        return;
    }

    let result;
    if (type === "temperature") {
        result = conversions.temperature.convert(val, from, to);
    } else {
        result = val * conversions[type][from][to];
    }

    output.textContent = result.toFixed(4);
}

typeSelect.addEventListener("change", () => {
    populateUnits(typeSelect.value);
    convert();
});

[input, fromUnit, toUnit].forEach(el => {
    el.addEventListener("input", convert);
    el.addEventListener("change", convert);
});

// Initialize
populateUnits("length");
convert();
