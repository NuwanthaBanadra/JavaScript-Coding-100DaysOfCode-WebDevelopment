const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const transactionsList = document.getElementById('transactions');
const form = document.getElementById('transaction-form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function addTransaction(e) {
    e.preventDefault();
    const transaction = {
        id: Date.now(),
        text: text.value,
        amount: +amount.value
    };
    transactions.push(transaction);
    updateUI();
    updateLocalStorage();
    form.reset();
}

function deleteTransaction(id) {
    transactions = transactions.filter(tx => tx.id !== id);
    updateUI();
    updateLocalStorage();
}

function updateUI() {
    transactionsList.innerHTML = "";
    transactions.forEach(tx => {
        const sign = tx.amount < 0 ? '-' : '+';
        const item = document.createElement('li');
        item.classList.add(tx.amount < 0 ? 'minus' : 'plus');
        item.innerHTML = `
      ${tx.text} <span>${sign}$${Math.abs(tx.amount)}</span>
      <button class="delete-btn" onclick="deleteTransaction(${tx.id})">×</button>
    `;
        transactionsList.appendChild(item);
    });

    const amounts = transactions.map(t => t.amount);
    const total = amounts.reduce((acc, val) => acc + val, 0).toFixed(2);
    const incomeTotal = amounts.filter(a => a > 0).reduce((acc, val) => acc + val, 0).toFixed(2);
    const expenseTotal = (
        amounts.filter(a => a < 0).reduce((acc, val) => acc + val, 0) * -1
    ).toFixed(2);

    balance.textContent = `$${total}`;
    income.textContent = `+$${incomeTotal}`;
    expense.textContent = `-$${expenseTotal}`;
}

function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

form.addEventListener('submit', addTransaction);
window.addEventListener('DOMContentLoaded', updateUI);
