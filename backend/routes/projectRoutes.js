const express = require("express");
const project_route = express.Router();
const bodyParser = require("body-parser");
const multer = require("multer");


project_route.use(bodyParser.json());
project_route.use(bodyParser.urlencoded({extended: true}));

project_route.use(express.static("public"));

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

const projectController = require("../controller/projectController");

const adminAuth = require("../middlewer/adminAuth");

project_route.post("/add-project", adminAuth, upload.single("images"), projectController.createProject);
project_route.get("/get-projects", projectController.getAllProjects);


module.exports = project_route;