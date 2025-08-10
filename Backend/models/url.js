const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    shortID : {
        type : String,
        required : true,
        unique : true
    },
    
    redirectURL : {
        type : String,
        required : true,
        unique : true
    },
    
    totalClicks : {
        type : Number
    },
    
    visitedHistory : [{timestamp : {
        type : Number
    }}],
    
},
{timestamps : true})

const URL = mongoose.model("URL", userSchema)

module.exports = URL;