const apiUrl = "http://localhost:3000/components"; // Change to deployed URL later

const list = document.getElementById("component-list");
const form = document.getElementById("add-component-form");
const nameInput = document.getElementById("name");
const usageInput = document.getElementById("usageCount");

// Fetch and display components
async function fetchComponents() {
  const res = await fetch(apiUrl);
  const components = await res.json();
  list.innerHTML = "";
  components.forEach(c => {
    const li = document.createElement("li");
    li.textContent = `${c.name} (Usage: ${c.usageCount})`;
    li.dataset.id = c.id;
    li.addEventListener("click", () => deleteComponent(c.id));
    list.appendChild(li);
  });
}

// Add new component
form.addEventListener("submit", async e => {
  e.preventDefault();
  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: nameInput.value, usageCount: Number(usageInput.value) })
  });
  nameInput.value = "";
  usageInput.value = "";
  fetchComponents();
});

// Delete component
async function deleteComponent(id) {
  await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
  fetchComponents();
}

// Initial load
fetchComponents();
