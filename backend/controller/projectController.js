const Project = require('../models/projects');

// Create a new project
const createProject = async (req, res) => {
    try {
        const { title, description, image, technologies, githubUrl, liveUrl, category, turnstileToken } = req.body;
        const project = new Project({
            title,
            description,
            image,
            technologies,
            githubUrl,
            liveUrl,
            category
        });
        const data = await project.save();
        res.status(200).send({ success: true, msg: "Project created successfully", data: data });

    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}


module.exports = {
    createProject
}