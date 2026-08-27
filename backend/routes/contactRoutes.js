
const express = require("express");
const contact_route = express.Router();
const bodyParser = require("body-parser");

contact_route.use(bodyParser.json());
contact_route.use(bodyParser.urlencoded({extended: true}));

const contactController = require("../controller/contactController");

const adminAuth = require("../middlewer/adminAuth");

contact_route.post("/submit", contactController.createContact);

contact_route.post("/admin/login", contactController.adminLogin);
contact_route.get("/getDashboardState", adminAuth, contactController.getDashboardState);
contact_route.get("/admin/messages", adminAuth, contactController.getMessages);
contact_route.get("/admin/messages/:id", adminAuth, contactController.getMessagesById);



module.exports = contact_route;