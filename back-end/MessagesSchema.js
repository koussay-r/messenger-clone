import mongoose from "mongoose";


const messagesSchema=mongoose.Schema({
    nameCollec1:String,
    nameCollec2:String,
    name:String,
    message:String
})
export default messagesSchema