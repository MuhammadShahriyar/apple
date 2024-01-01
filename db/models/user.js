let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    email:String,    
    password:String,
    city:String,
    ads:[]    
});

let User = mongoose.model('user', userSchema)
module.exports = User;

