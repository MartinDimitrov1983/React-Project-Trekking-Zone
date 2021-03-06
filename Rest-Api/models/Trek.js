const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const trekSchema = new Schema({

    location : {
        type:String,
        required: true
    },
    dateTime : {
        type:String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type :String,
        required: true
    },
    likes:{
        type:Number
    },
    author: {
        type: ObjectId,
        ref: "User"
    }

});

module.exports = new Model('Trek', trekSchema);