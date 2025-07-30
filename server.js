import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import projectRoutes from "./Routes/projectRoute.js";
import authRoute from "./Routes/authRoute.js";
import contactRoutes from "./Routes/contactRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // JSON body parse garna

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://mohitbudhamagar8:clusterpassword@cluster0.ka4lhjn.mongodb.net/portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((err) => console.log(err));

// Simple route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




app.use("/api/projects", projectRoutes);
app.use("/api/auth",authRoute);
app.use("/api/contact", contactRoutes);
