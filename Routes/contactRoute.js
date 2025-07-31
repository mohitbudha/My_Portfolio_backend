import express from "express";
import Message from "../Models/Contact.js";
import { verifyToken } from "./authRoute.js"; // admin auth middleware

const router = express.Router();

// ✅ User ले message पठाउने
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error sending message" });
  }
});

// ✅ Admin Dashboard: सबै messages fetch गर्ने
router.get("/", verifyToken, async (req, res) => {
  try {
    const messages = await Message.find().sort({ date: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Error fetching messages" });
  }
});

export default router;
