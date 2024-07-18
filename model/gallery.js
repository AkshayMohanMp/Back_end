const { Timestamp } = require("mongodb");
const mongoose =require('mongoose');


const Schema = mongoose.Schema;

const gallerySchema = new Schema({
    image: {
        type: String,
        required : true,
    },

},{
    Timestamp:true,
})




module.exports =mongoose.model("Gallery",gallerySchema)