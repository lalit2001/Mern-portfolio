const express= require('express');
const dotenv=require('dotenv');
const app=express();

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