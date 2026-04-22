const output = document.getElementById("output");

// Mostrar todos
function showAll() {
  render(customers);
}

// Clientes de alto valor (saldo alto)
function highValue() {
  const filtered = customers.filter(c => c.balance > 1000);
  render(filtered);
}

// Clientes de alto risco
function highRisk() {
  const filtered = customers.filter(c => c.risk === "high");
  render(filtered);
}

// Renderização
function render(data) {
  output.innerHTML = "";

  data.forEach(c => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${c.name}</h3>
      <p>Balance: £${c.balance}</p>
      <p>Activity: ${c.activity}</p>
      <p>Risk: ${c.risk}</p>
    `;

    output.appendChild(div);
  });
}

// default
showAll();