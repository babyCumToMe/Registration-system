const mongoose = require("mongoose");
const path = require("path");
const User = require(path.join(__dirname,"User.js"));

mongoose.connect("mongodb://localhost:27017/registration_system");

async function createUser({username, password, age}){
    const user = new User({username, password, age})

    await user.save();
    console.log(`${username} has been saved into the database`)
}

async function locateUser(username){
    try{
        if(User.findOne({username}) === undefined){
            return true;
        }
        return false;
    }
    catch(e){
        console.log(e.message);
    }
}

module.exports = {locateUser, createUser}