const mongoose = require("mongoose");
const path = require("path");
const User = require(path.join(__dirname,"User.js"));

mongoose.connect("mongodb://localhost:27017/registration_system");

async function createUser({username, password, age}){
    const user = new User({username, password, age})

    await user.save();
    console.log(`${username} has been saved into the database`)
}
