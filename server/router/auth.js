const express=require('express');


const router = express.Router();



router.post('/signupp',(req,res)=>{
    res.send(req.body);
    console.log(req.body);
});

router.get('/',(req,res)=>{
    res.send('home page');
});
router.get('/about',(req,res)=>{
    res.send('about page');
});

router.get('/contact',(req,res)=>{
    res.send('contact page');
});

router.get('/signin',(req,res)=>{
    res.send('signin page');
});


router.get('/signup',(req,res)=>{
    res.send('signup page');
});

router.post('/register',(req,res)=>{
    console.log(req.body);
    // res.json({message:req.json});
    res.send('jgdsjhjhd');
})