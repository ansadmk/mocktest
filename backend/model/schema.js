const mongoose=require('mongoose')
const schema=mongoose.Schema({
    name:String, price:Number, image:String
})
module.exports=mongoose.model("products",schema)