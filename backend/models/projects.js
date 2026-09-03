const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    technologies: {
        type: [String],
        default: []
    },
    githubUrl: {
        type: String,
        default: ""
    },
    liveUrl: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        default: "Web Development"
    }
}, 
{
    timestamps: true
});

module.exports = mongoose.model("Project", projectSchema);