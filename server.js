import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoute from "./Routes/contactRoute.js";
import projectRoute from"./Routes/projectRoute.js";
import authRoutes from "./Routes/authRoute.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use("/api/projects", projectRoute);
app.use("/api/contact", contactRoute);
app.use("/api/auth", authRoutes);

// ✅ Connect DB
mongoose.connect("mongodb+srv://mohitbudhamagar8:clusterpassword@cluster0.ka4lhjn.mongodb.net/PortfolioDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));


