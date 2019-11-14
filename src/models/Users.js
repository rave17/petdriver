const mongoose = require('mongoose').Schema;

const userDriver = mongoose.Schema({
    name : String,
    lastname: String,
    idNumber: Number,
    password: String,
    adress: String,
    age: Number,
    pets: Boolean,
    createdAt : {type : Date.now()}
})

mongoose.exports = model('drivers', userDriver)