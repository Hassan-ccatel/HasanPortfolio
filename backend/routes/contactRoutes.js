
const express = require("express");
const contact_route = express.Router();
const bodyParser = require("body-parser");

contact_route.use(bodyParser.json());
contact_route.use(bodyParser.urlencoded({extended: true}));

const contactController = require("../controller/contactController");

const adminAuth = require("../middlewer/adminAuth");

contact_route.post("/submit", contactController.createContact);

contact_route.post("/admin/login", function (req, res) {
    res.send("Hellooooooo");
});
contact_route.get("/admin/messages", adminAuth, contactController.getMessages);



module.exports = contact_route;