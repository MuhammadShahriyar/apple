let mongoose = require('mongoose');

let adSchema = mongoose.Schema({
    price:Number,
    title:String,
    img:String,
    meraUser:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"user"
    }
});

module.exports = mongoose.model('ad', adSchema)