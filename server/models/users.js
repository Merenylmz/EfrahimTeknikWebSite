const Joi = require("joi");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const usersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    resetToken: String,
    resetTokenExpiration: Date
}, {timestamp: true});

function validateLogin(user) {
    const schema = new Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(5).required()
    });

    return schema.validate(user);
}

function validateRegister(user) {
    const schema = new Joi.object({
        name: Joi.string().min(3).max(50),
        email: Joi.string().email().required(),
        password: Joi.string().min(5).required()
    });

    return schema.validate(user);
}

usersSchema.methods.createAuthToken = function(){
    const decodedToken = jwt.sign({_id: this._id, isAdmin: this.isAdmin}, process.env.JWTSecretKey);
    return decodedToken;
}

const Users = mongoose.model("Users", usersSchema);

module.exports = {Users, validateLogin, validateRegister};