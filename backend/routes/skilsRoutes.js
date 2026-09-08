const express = require("express");
const skill_route = express.Router();
const bodyParser = require("body-parser");
const multer = require("multer");

skill_route.use(bodyParser.json());
skill_route.use(bodyParser.urlencoded({extended: true}));

const skilStorage = multer.memoryStorage();

const upload = multer({ storage: skilStorage });

const skillController = require("../controller/skilsController");

const adminAuth = require("../middlewer/adminAuth");

skill_route.post("/add-skill", adminAuth, upload.single("image"), skillController.createSkill);
skill_route.get("/get-skill", adminAuth, skillController.getSkills);


module.exports = skill_route;