const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    
    carname:{type:String,
},
carcategory:{
    type:String,

}
})

const cars = mongoose.model('cars',carSchema)
module.exports=cars