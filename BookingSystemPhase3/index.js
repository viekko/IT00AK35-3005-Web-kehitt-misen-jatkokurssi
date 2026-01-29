require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT; // Server port from .env file PITÄISIKO OLLA FALLBACK? ESIM || 5000
const path = require("path");

// Timestamp
function timestamp() {
  const now = new Date();
  return now.toISOString().replace("T", " ").replace("Z", "");
}

// --- Middleware ---
app.use(express.json()); // Parse application/json

// Serve everything in ./public as static assets
const publicDir = path.join(__dirname, "public");
app.use(express.static(publicDir));

// --- Views (HTML pages) ---
// GET /  -> serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

// Optional: GET /resources -> serve resources.html directly
app.get("/resources", (req, res) => {
  res.sendFile(path.join(publicDir, "resources.html"));
});

//========= Pitäisikö nämä html tiedostot lisätä? --> En tenhyt uusia tiedostoja, mutta reitit lisätty. ============
// 1. GET /login -> serve login.html
app.get("/login", (req, res) => {
  res.sendFile(path.join(publicDir, "login.html"));
});

// 2. GET /register -> serve register.html ========== alla oleva korjattu!!! ============
app.get("/register", (req, res) => {
  res.sendFile(path.join(publicDir, "register.html"));
});

// 3. GET /bookings -> serve bookings.html ========== alla oleva korjattu!!! ============
app.get("/bookings", (req, res) => {
  res.sendFile(path.join(publicDir, "bookings.html"));
});

// 4. GET /privacypolicy -> serve privacypolicy.html ========== alla oleva korjattu!!! ============
app.get("/privacypolicy", (req, res) => {
  res.sendFile(path.join(publicDir, "privacypolicy.html"));
});

// 5. GET /terms -> serve terms.html ========== alla oleva korjattu!!! ============
app.get("/terms", (req, res) => {
  res.sendFile(path.join(publicDir, "terms.html"));
});

// 6. GET /cookiepolicy -> serve cookiepolicy.html ========= alla oleva korjattu!!! ============
app.get("/cookiepolicy", (req, res) => {
  res.sendFile(path.join(publicDir, "cookiepolicy.html"));
});

// POST /api/resources -> create/update/delete based on "action"
app.post("/api/resources", (req, res) => {
  const {
    action = "",
    resourceName = "",
    resourceDescription = "",
    resourceAvailable = false,
    resourcePrice = 0,
    resourcePriceUnit = "",
  } = req.body || {};

  // Normalize inputs
  const resourceAction = String(action).trim();
  const name = String(resourceName).trim();
  //const description = "";
  const description = String(resourceDescription).trim();
  const available = Boolean(resourceAvailable);
  const price = Number.isFinite(Number(resourcePrice))
    ? Number(resourcePrice)
    : 0;
  const unit = String(resourcePriceUnit || "").trim();

  // The client's request to the console
  console.log("The client's POST request ", `[${timestamp()}]`);
  console.log("--------------------------");
  console.log("Action ➡️ ", resourceAction);
  console.log("Name ➡️ ", name);
  console.log("Description ➡️ ", description);
  // 7 console.log("Description ➡️ ", "(omitted)"); ========== alla oleva korjattu!!! ============
  console.log("Availability ➡️ ", available);
  console.log("Price ➡️ ", price);
  console.log("Price unit ➡️ ", unit);
  console.log("--------------------------");
  //8 return res.json({ ok: true, echo: req.body } ========== alla oleva korjattu!!! ============
  return res.json({
  ok: true,
  echo: {
    action: resourceAction,
    resourceName: name,
    resourceDescription: description,
    resourceAvailable: available,
    resourcePrice: price,
    resourcePriceUnit: unit
  }
});
});

// --- Fallback 404 for unknown API routes ---
app.use("/api", (req, res) => {
  res.status(404).json({ error: "Not found" });
  // 13 LÄHETTÄÄ KAKSI VASTAUSTA! EI OK ========== alla oleva korjattu!!! ============
  //res.json({ ok: true });
});

// --- Start server ---
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});



