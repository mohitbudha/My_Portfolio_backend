import Project from "../Models/Projects.js";

// @desc    Get All Projects
// @route   GET /api/projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Add New Project
// @route   POST /api/projects
export const addProject = async (req, res) => {
  try {
    const { title, description, techStack, github, liveDemo, image } = req.body;

    if (!title || !description) {
      return res.status(400).json({ success: false, message: "Title and Description are required" });
    }

    const newProject = new Project({ title, description, techStack, github, liveDemo, image });
    await newProject.save();

    res.status(201).json({ success: true, message: "Project added successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// @desc    Delete Project
// @route   DELETE /api/projects/:id
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return res.status(404).json({ success: false, message: "Project not found" });
    }

    res.json({ success: true, message: "Project deleted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
