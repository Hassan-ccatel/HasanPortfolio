const Skill = require("../models/skils");
const cloudinary = require("../utils/cloudinary");

const createSkill = async (req, res) => {
    try {
        const { title, description, image, percentage } = req.body;
        if (!req.file) {
            return res.status(400).send({ success: false, msg: "Image is required" });
        }

        const uploadResult = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream({
                folder: "skills",
                resource_type: "auto"
            }, (error, result) => {
                if(error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
            stream.end(req.file.buffer);
        });

        const skill = new Skill({
            title,
            description,
            image: uploadResult.secure_url,
            percentage
        });
        const savedSkill = await skill.save();
        res.status(200).send({ success: true, msg: "Skill created successfully", data: savedSkill });

    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}

const getSkills = async(req, res)=>{
    try {
        const skills = await Skill.find();
        res.status(200).send({ success: true, msg: "Fetch data successfully!", data: skills});
    } catch(error){
        res.status(400).send({ success: false, msg: error.message});
    }

}





module.exports = {
    createSkill,
    getSkills
}