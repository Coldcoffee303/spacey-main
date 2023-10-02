const mongoose=require("mongoose");


const Slider= new mongoose.Schema({
    title:String,
    subTitle:String,
    imageurl:String,
    class:String
})
const slider = mongoose.model('slider',Slider);

module.exports= {slider};