require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
    origin: "*"
}));

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);

const contact_route = require("./routes/contactRoutes");

app.use("/api", contact_route);
app.get("/", (req,res)=>{
    res.send("Hello world");
})

app.listen(8000, function(){
    console.log("server is running");
});