const express=require('express')
const router=express.Router()
const {showDetails}=require('../controller/main')
router.get('/products',showDetails)
module.exports=router