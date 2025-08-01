import express from "express";
import { addContact, getContacts } from "../Controllers/contactController.js";

const router = express.Router();

router.post("/", addContact);
router.get("/", getContacts); // Only for admin

export default router;
