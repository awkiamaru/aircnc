const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail:String,
    company:String,
    price:Number,
    techs:[String],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
}, {
    toJSON:{
        virtuals: true,
    }
})

SpotSchema.virtual('thumbnail_url').get(function(){
    return `http://192.168.20.82:3300/files/${this.thumbnail}`
})

module.exports  = mongoose.model('Spot', SpotSchema);