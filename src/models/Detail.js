const mongoose=require("mongoose");

const Details= new mongoose.Schema({
    brandname:String,
    brandicon:String,
    links:[
        {
            label:String,
            url:String
        },
    ],
});
const details = mongoose.model("Details",Details);
module.exports= {details};