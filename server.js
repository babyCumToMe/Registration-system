const express = require("express");
const cors = require("cors")
const path = require("path")
const app = express();

const {createUser} = require(path.join(__dirname, "userHandling.js"));

app.use(cors())
app.use(express.static("public"))

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
    res.end;
});

app.get('/register', (req, res) =>{
    res.sendFile(path.join(__dirname, "public", "registration.html"));
})

app.post("/registration", (req, res)=>{

    
})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000...")
})