const express= require('express');
const dotenv=require('dotenv');
const app=express();

dotenv.config({path:'./.env'});

//import database data
require('./db/conn');
require('./models/schema');


app.use(express.json());

//create port
const PORT=process.env.PORT;


app.post('/signupp',(req,res)=>{
    res.send(req.body)
})

app.get('/',(req,res)=>{
    res.send('home page');
});
app.get('/about',(req,res)=>{
    res.send('about page');
});

app.get('/contact',(req,res)=>{
    res.send('contact page');
});

app.get('/signin',(req,res)=>{
    res.send('signin page');
});


app.get('/signup',(req,res)=>{
    res.send('signup page');
});

app.listen(PORT,()=>{
    console.log(`connected at ${PORT}`);
});