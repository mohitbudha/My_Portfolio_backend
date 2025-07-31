


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./Routes/authRoute.js";
import messageRoutes from "./Routes/contactRoute.js";

const app = express();
const PORT = 5000;

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/auth", authRoutes);

// ✅ MongoDB Connection
mongoose.connect("mongodb+srv://mohitbudhamagar8:clusterpassword@cluster0.ka4lhjn.mongodb.net/Portfolio", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Error:", err));

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

app.use("/api/messages", messageRoutes);
