import mongoose from "mongoose";
const Schema=mongoose.Schema
const event =new Schema({
    event:{
        type:String,
        required:true
    },    
    price:{
        type:String,
        required:true
    },
    eventpic:{
        type:String,
        required:true
    }
   
})
export default  mongoose.model('events',event)