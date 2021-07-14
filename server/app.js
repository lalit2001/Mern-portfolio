const express= require('express');
const dotenv=require('dotenv');
const app=express();

var cookieParser = require('cookie-parser')
app.use(cookieParser())
dotenv.config({path:'./.env'});

//import database data
require('./db/conn');
require('./models/schema');

app.use(express.json());
app.use(require('./router/auth'));



//create port
const PORT=process.env.PORT;




app.listen(PORT,()=>{
    console.log(`connected at ${PORT}`);
});