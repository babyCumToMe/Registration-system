const express = require("express");
const path = require("path")
const app = express();

app.use(express.static("public"))

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
    res.end;
})

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000...")
})