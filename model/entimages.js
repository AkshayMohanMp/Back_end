const { Timestamp } = require("mongodb");
const mongoose =require('mongoose');


const Schema = mongoose.Schema;

const ENTimageSchema = new Schema({
    image: {
        type: String,
        required : true,
    },


},{
    Timestamp:true,
})




module.exports =mongoose.model("entimage",ENTimageSchema)