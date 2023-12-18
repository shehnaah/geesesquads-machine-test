const mongoose=require('mongoose')
const cars = require('../Model/carSchema')
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb Atlas connected successfully with CarI");

}).catch(err=>{
    console.log("Mongodb connection failed:"+err);
})

