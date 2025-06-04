let goalList = document.getElementById("goalList");
let goals = JSON.parse(localStorage.getItem("goals")) || [];

function saveGoals() {
    localStorage.setItem("goals", JSON.stringify(goals));
}

function renderGoals() {
    goalList.innerHTML = "";
    goals.forEach((goal, index) => {
        const li = document.createElement("li");
        li.textContent = goal.text;
        if (goal.checked) li.classList.add("checked");

        li.onclick = () => {
            goals[index].checked = !goals[index].checked;
            saveGoals();
            renderGoals();
        };

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";
        removeBtn.onclick = (e) => {
            e.stopPropagation();
            goals.splice(index, 1);
            saveGoals();
            renderGoals();
        };

        li.appendChild(removeBtn);
        goalList.appendChild(li);
    });
}

function addGoal() {
    const input = document.getElementById("goalInput");
    const text = input.value.trim();
    if (text) {
        goals.push({ text, checked: false });
        saveGoals();
        renderGoals();
        input.value = "";
    }
}

function clearGoals() {
    if (confirm("Clear all goals?")) {
        goals = [];
        saveGoals();
        renderGoals();
    }
}

renderGoals();
