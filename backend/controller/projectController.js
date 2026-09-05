const Project = require('../models/projects');
const cloudinary = require('../utils/cloudinary');

// Create a new project
const createProject = async (req, res) => {
    try {
        const { title, description, image, technologies, githubUrl, liveUrl, category, turnstileToken } = req.body;
        // Check if the image is provided
        if (!req.file) {
            return res.status(400).send({ success: false, msg: "Image is required" });
        }

        // Upload the image to Cloudinary
        const uploadResult = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream({
                folder: "Projects",
                resource_type: "auto"
            }, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
            stream.end(req.file.buffer);
        });


        const project = new Project({
            title,
            description,
            image: uploadResult.secure_url,
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