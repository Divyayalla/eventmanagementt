import mongoose from "mongoose";
const Schema =mongoose.Schema;
let mailSchema =new Schema({
    email:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    events:{
        type:String,
        required:true
    }
});
export default mongoose.model("send email",mailSchema);