function addItem() {
    const itemsDiv = document.getElementById("items");
    const newRow = document.createElement("div");
    newRow.classList.add("item-row");
    newRow.innerHTML = `
    <input type="text" placeholder="Item name" class="item" />
    <input type="number" placeholder="Qty" class="qty" />
    <input type="number" placeholder="Price" class="price" />
  `;
    itemsDiv.appendChild(newRow);
}

function generateReceipt() {
    const name = document.getElementById("customerName").value || "Customer";
    const items = document.querySelectorAll(".item");
    const qtys = document.querySelectorAll(".qty");
    const prices = document.querySelectorAll(".price");

    let total = 0;
    let html = `<h2>Receipt for ${name}</h2><table border="1" width="100%" cellpadding="5"><tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr>`;

    for (let i = 0; i < items.length; i++) {
        const item = items[i].value;
        const qty = Number(qtys[i].value);
        const price = Number(prices[i].value);
        const itemTotal = qty * price;
        total += itemTotal;

        if (item && qty && price) {
            html += `<tr><td>${item}</td><td>${qty}</td><td>${price}</td><td>${itemTotal.toFixed(2)}</td></tr>`;
        }
    }

    html += `<tr><td colspan="3"><strong>Grand Total</strong></td><td><strong>${total.toFixed(2)}</strong></td></tr></table>`;
    document.getElementById("receipt").innerHTML = html;
}
