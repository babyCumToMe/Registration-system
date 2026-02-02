const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    age: {
        type: Number, 
        required: true
    },

    email: {
        type: String,
        lowercase: true,
        default: function(){
            return `${this.username}@gmail.com`;
        }
    },

    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },

    updatedAt: {
        type: Date,
        default: () => Date.now(),
    }
});

userSchema.statics.findByName = function (username){
    const query = this.findOne({username: new RegExp(username, "i")});
    return query;
}

module.exports = mongoose.model("user", userSchema)