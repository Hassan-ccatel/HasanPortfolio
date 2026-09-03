const express = require("express");
const project_route = express.Router();
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

project_route.use(bodyParser.json());
project_route.use(bodyParser.urlencoded({extended: true}));

project_route.use(express.static("public"));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/images"));
    },
    filename: function (req, file, cb) {
        const name = new Date() + "-" + file.originalname;
        cb(null, name);
    }
});

const upload = multer({ storage: storage });

const projectController = require("../controller/projectController");

const adminAuth = require("../middlewer/adminAuth");

project_route.post("/create-project", adminAuth, upload.single("images"), projectController.createProject);