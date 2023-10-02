const mongoose=require("mongoose");

const Detail=mongoose.schema({
    brandname:String,
    brandicon:String,
    links:[
        {
            label:String,
            url:String
        },
    ],
});

module.exports=mongoose.model("detail",Detail)