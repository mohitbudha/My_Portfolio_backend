import express from "express";
import { loginUser } from "../Controllers/userController.js";

const router = express.Router();

router.post("/login", loginUser); // only login
export default router;
