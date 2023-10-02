const express=require("express");
const hbs=require("hbs");
const mongoose=require("mongoose");
const path = require("path");
const app=express();
const routes=require("./routes/main");
const Detail=require("./models/Detail");
const Slider=require("./models/Slider");



app.use(express.static("public"));
app.use('',routes);

//template engine
app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials(path.join(__dirname, "../","/views/partials"));

//db connection
mongoose.connect('mongodb://127.0.0.1:27017',()=>{
    console.log("db connected");
    Detail.create({
        brandname:"ae",
        brandicon:"",
        links:[
            {
                label:"Home",
                url:"/"
            },
            {
                label:"List",
                url:"/list"
            },
            {
                label:"recommended",
                url:"/recommended"
            },
            {
                label:"about",
                url:"/about"
            },
        ]
    })
});

app.listen(process.env.PORT | 3000, () =>{
    console.log("server started");
});

Slider.create([
    {
        title:'NARUTO',
        subTitle:'goat',
        imageurl:''
    },
    {
        title:'NARUTO',
        subTitle:'goat',
        imageurl:''
    },
    {
        title:'NARUTO',
        subTitle:'goat',
        imageurl:''
    }
])