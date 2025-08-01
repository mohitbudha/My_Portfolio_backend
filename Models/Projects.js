import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  tech: { type: [String] }, // Array of technologies
  img: { type: String}, // Image URL
  link: { type: String }, // Project Link
}, { timestamps: true });

export default mongoose.model("Project", projectSchema);
