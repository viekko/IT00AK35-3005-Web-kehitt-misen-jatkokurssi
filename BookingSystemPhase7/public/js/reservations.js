let form;
let messageBox;

document.addEventListener("DOMContentLoaded", () => {
  form = document.getElementById("reservation-form");
  messageBox = document.getElementById("message");

  form.addEventListener("submit", saveReservation);

  loadReservations();
});

function showMessage(text, type = "info") {

  const colors = {
    success: "green",
    error: "red",
    info: "#263f6a"
  };

  messageBox.innerHTML =
    `<p style="color:${colors[type] || colors.info}">${text}</p>`;
}

function getToken() {
  return localStorage.getItem("token");
}

function toUtcIso(v) {
  if (!v) return null;
  return new Date(v).toISOString();
}

async function saveReservation(e) {

  e.preventDefault();

  const token = getToken();

  const payload = {
    resourceId: Number(document.getElementById("resourceId").value),
    userId: Number(document.getElementById("userId").value),
    startTime: toUtcIso(document.getElementById("startTime").value),
    endTime: toUtcIso(document.getElementById("endTime").value),
    note: document.getElementById("note").value,
    status: document.getElementById("status").value
  };

  try {

    const res = await fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const text = await res.text();
      showMessage("Save failed: " + text, "error");
      return;
    }

    showMessage("Reservation saved!", "success");

    form.reset();

    loadReservations();

  } catch (err) {
    console.error(err);
    showMessage("Network error while saving reservation: " + err.message, "error");
  }

}

async function loadReservations() {

  const token = getToken();

  const tbody = document.querySelector("#reservations-table tbody");

  if (!tbody) return;

  tbody.innerHTML = "";

  try {

    const res = await fetch("/api/reservations", {
      headers: {
        "Authorization": "Bearer " + token
      }
    });

    if (!res.ok) {
      const text = await res.text();
      showMessage("Failed to load reservations: " + text, "error");
      return;
    }

    const data = await res.json();

    // Korjattu: backend voi palauttaa objektin, jossa reservations on taulukko
    const reservations = Array.isArray(data) ? data : (data.reservations || []);

    reservations.forEach(r => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="py-2 px-3">${r.id}</td>
        <td class="py-2 px-3">${r.resourceId}</td>
        <td class="py-2 px-3">${r.userId}</td>
        <td class="py-2 px-3">${r.startTime}</td>
        <td class="py-2 px-3">${r.endTime}</td>
        <td class="py-2 px-3">${r.status}</td>
        <td class="py-2 px-3">
          <button onclick="deleteReservation(${r.id})">Delete</button>
        </td>
      `;
      tbody.appendChild(tr);
    });

  } catch (err) {
    console.error(err);
    showMessage("Network error while loading reservations: " + err.message, "error");
  }

}

async function deleteReservation(id) {

  const token = getToken();

  if (!confirm("Delete reservation?")) return;

  try {

    const res = await fetch(`/api/reservations/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + token
      }
    });

    if (!res.ok) {
      const text = await res.text();
      showMessage("Delete failed: " + text, "error");
      return;
    }

    showMessage("Reservation deleted", "success");

    loadReservations();

  } catch (err) {
    console.error(err);
    showMessage("Network error: " + err.message, "error");
  }

}
