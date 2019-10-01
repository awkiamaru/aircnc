const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:String
    // email:String,
    // age:Number,
    // active:Boolean,

})

module.exports  = mongoose.model('User', UserSchema);