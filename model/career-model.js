const mongoose =require("mongoose");
const { Timestamp } = require("mongodb");

const Schema = mongoose.Schema;

const CareerSchema = new Schema({
    deparrtment: {
        type: String,
        required : true,
    },
    experience: {
        type: String,
        required : true,
    },
    position: {
        type: String,
        required : true,
    },
    
},{
    Timestamp:true,
})

module.exports =mongoose.model("Career",CareerSchema)