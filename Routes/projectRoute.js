import express from "express";
import { addProject, getProjects } from "../Controllers/projectController.js";
import { protect, adminOnly } from "../Middleware/Admin.js";

const router = express.Router();

router.get("/", getProjects); // public
router.post("/", protect, adminOnly, addProject); // secure

export default router;
