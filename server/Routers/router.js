const express =require('express')
const carController=require('../controllers/carController')
const userController=require('../controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')


const router=new express.Router()

// register
router.post('/register',userController.register)
// login
// router.post('/user/login',userController.login)
// add profile
router.post('/dashboard/add',carController.addCar)
module.exports=router

