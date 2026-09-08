const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    percentage: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model("Skill", skillSchema);