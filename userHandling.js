const mongoose = require("mongoose");
const path = require("path");
const User = require(path.join(__dirname,"User.js"));

mongoose.connect("mongodb://localhost:27017/registration_system");

async function createUser({username, password, age, email}){
    const user = new User({username, password, age, email})

    await user.save();
    console.log(`${username} has been saved into the database`)
}

async function findUser(username){
    try{
        const user = await User.findByName(username);

        return !!user;
    }
    catch(e){
        console.log(e.message);
        return false;
    }
}

function callFindByName(){
    User.findByName("Fuyo");
}

module.exports = {findUser, createUser, callFindByName}