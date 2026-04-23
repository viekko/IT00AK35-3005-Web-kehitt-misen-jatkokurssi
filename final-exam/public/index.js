const API_URL = "/api/persons";

// Clear form and reset buttons
function clearForm() {
  document.getElementById("customerId").value = "";
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("birthDate").value = "";
  document.getElementById("saveBtn").style.display = "inline-block";
  document.getElementById("updateBtn").style.display = "none";
  document.getElementById("deleteBtn").style.display = "none";
}

// Fill form when customer is clicked
function fillForm(person) {
  document.getElementById("customerId").value = person.id;
  document.getElementById("firstName").value = person.first_name || "";
  document.getElementById("lastName").value = person.last_name || "";
  document.getElementById("email").value = person.email || "";
  document.getElementById("phone").value = person.phone || "";
  
  // Format birth date to YYYY-MM-DD for input[type="date"] --> Returns birthdate correctly
  const rawDate = person.birth_date || "";
  document.getElementById("birthDate").value = rawDate ? rawDate.substring(0, 10) : "";
  document.getElementById("saveBtn").style.display = "none";
  document.getElementById("updateBtn").style.display = "inline-block";
  document.getElementById("deleteBtn").style.display = "inline-block";
}

// Load and render customer list
async function loadCustomers() {
  const container = document.getElementById("customer-list");
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();

    container.innerHTML = "";
    if (data.length === 0) {
      container.innerHTML = "<p>No customers found.</p>";
      return;
    }

    data.forEach(person => {
      const div = document.createElement("div");
      div.className = "customer-card";
      div.innerHTML = `
        <strong>${person.first_name} ${person.last_name}</strong><br>
        Email: ${person.email}<br>
        Phone: ${person.phone || "-"}
      `;
      div.addEventListener("click", () => fillForm(person));
      container.appendChild(div);
    });

  } catch (err) {
    console.error(err);
    container.innerHTML = "<p style='color:red;'>Error loading data</p>";
  }
}

// Add new customer
document.getElementById("saveBtn").addEventListener("click", async () => {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const birthDate = document.getElementById("birthDate").value;

  // Validointi
   if (!firstName || !lastName || !email) {
    alert("First name, last name and email are required.");
    return;
  }
  
  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  if (phone.trim() !== "" && !/^[\d\s+\-()]+$/.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
  }

  const data = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone: phone,
    birth_date: birthDate,
  };

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  clearForm();
  loadCustomers();
});

// Update customer
document.getElementById("updateBtn").addEventListener("click", async () => {
  const id = document.getElementById("customerId").value;
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const birthDate = document.getElementById("birthDate").value;

  // Validointi
   if (!firstName || !lastName || !email) {
    alert("First name, last name and email are required.");
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  if (phone.trim() !== "" && !/^[\d\s+\-()]+$/.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
  }

  const data = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone: phone,
    birth_date: birthDate,
  };

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  clearForm();
  loadCustomers();
});

// Delete customer
document.getElementById("deleteBtn").addEventListener("click", async () => {
  const id = document.getElementById("customerId").value;
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  clearForm();
  loadCustomers();
});

// Clear button
document.getElementById("clearBtn").addEventListener("click", clearForm);

// Run on page load
loadCustomers();