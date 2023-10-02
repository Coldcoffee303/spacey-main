const express=require("express");
const routes=express.Router();

const {d}=require("../models/Detail")

routes.get("/",async  (req,res)=> {
    const details=await Detail.findOne({"_id":""});
    const slides=await Slider.find()

    res.render("index",{
        details:details,
        slides:slides
    })
});

routes.get("/list",async (req,res)=> {
    const details=await Detail.findOne({"_id":""});

    res.render("index",{
        details:details
    })
});

module.exports=routes;