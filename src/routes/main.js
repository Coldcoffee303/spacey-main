const express=require("express");
const routes=express.Router();

const {details}=require("../models/Detail")
const {slider}=require("../models/Slider")
routes.get("/",async (req,res)=> {
    const newDetails=await details.find();
    const newSlides=await slider.find()
    console.log(newSlides);
    res.render("index",{
        details:newDetails,
        slides:newSlides
    })
});

routes.get("/list",async (req,res)=> {
    const newDetails=await details.find();

    res.render("index",{
        details:newDetails
    })
});

module.exports=routes;