// src/app.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import resourcesRouter from "./routes/resources.routes.js";
import reservationsRouter from "./routes/reservations.routes.js";
import authRoutes from "./routes/auth.routes.js";

// 🔐 middleware-kansio on projektin juuressa → yksi taso ylös
import { requireAuth } from "../middleware/authMiddleware.js";

// 🔐 Suojattu sivureitti /reservations
import reservationsPageRouter from "./routes/reservations.page.routes.js";

// __dirname tuki ESModuleille
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// --- Middleware ---
app.use(express.json());

// --- Staattiset tiedostot ---
const publicDir = path.join(__dirname, "..", "public");
app.use(express.static(publicDir));

// --- Julkiset sivut ---
app.get("/", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});
app.get("/login", (_req, res) => {
  res.sendFile(path.join(publicDir, "login.html"));
});
app.get("/register", (_req, res) => {
  res.sendFile(path.join(publicDir, "register.html"));
});

// --- Suojatut sivut ---
// (Jos resources.html on src/views-kansiossa ja haluat suojata sen)
app.get("/resources", (_req, res) => {
  res.sendFile(path.join(process.cwd(), "src", "views", "resources.html"));
});

// Suojattu /reservations sivu (älä tee toista päällekkäistä reittiä!)
app.use("/", reservationsPageRouter);

// --- API-reitit ---
app.use("/api/resources", resourcesRouter);
app.use("/api/reservations", reservationsRouter);
app.use("/api/auth", authRoutes);

// --- API 404 ---
app.use("/api", (req, res) => {
  return res.status(404).json({
    ok: false,
    error: "Not found",
    path: req.originalUrl,
  });
});

// --- Frontend 404 ---
app.use((_req, res) => {
  return res.status(404).send("404 - Page not found");
});

// --- Central error handler ---
app.use((err, _req, res, next) => {
  console.error("Unhandled error:", err);
  if (res.headersSent) return next(err);
  return res.status(500).json({ ok: false, error: "Internal server error" });
});

export default app;