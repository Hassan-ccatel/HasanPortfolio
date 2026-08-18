const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
    origin: "*"
}));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/PORTFOLIO");

const contact_route = require("./routes/contactRoutes");

app.use("/api", contact_route);

app.listen(8000, function(){
    console.log("server is running");
});