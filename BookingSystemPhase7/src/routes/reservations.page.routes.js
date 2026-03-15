// src/routes/reservations.page.routes.js
import express from "express";
import path from "path";

// middleware-kansio on projektin juuressa → kaksi tasoa ylös
import { requireAuth } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.get("/reservations", (_req, res) => {
  res.sendFile(path.join(process.cwd(), "src", "views", "reservations.html"));
});

export default router;
