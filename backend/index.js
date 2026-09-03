require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// app.use(cors({
//     origin: "*"
// }));

app.use(cors({
    origin: "https://hasan-siddiqui.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL);

const contact_route = require("./routes/contactRoutes");
const project_route = require("./routes/projectRoutes");

app.use("/api", contact_route);
app.use("/api", project_route);
app.get("/", (req,res)=>{
    res.send("Hello world");
})

// app.listen(8000, function(){
//     console.log("server is running");
// });

module.exports = app;