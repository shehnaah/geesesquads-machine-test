require('dotenv').config();

const express = require('express');
const cors = require('cors');
const router = require('./Routers/router');
const cookieParser = require('cookie-parser');
require('./DB/connection');

const carserver = express();

carserver.use(cors());
carserver.use(express.json());
carserver.use(cookieParser());
carserver.use(router); 

const PORT = process.env.PORT || 4000;

carserver.listen(PORT, () => {
    console.log(`Car Server Started at Port: ${PORT}`);
});

carserver.get('/',(req,res)=>{
    res.send('<h1>car Server Started and Waiting For client request!!!</h1>')
})

