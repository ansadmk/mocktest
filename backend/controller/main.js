const Schema=require('../model/schema')
module.exports={
    showDetails:async(req,res)=>{
        const data= await Schema.find()
        console.log(data);
        res.json(data)
    }
}