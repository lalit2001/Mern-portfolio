const express=require('express');
require('../db/conn');
const bcrypt=require("bcryptjs");
const jwt= require('jsonwebtoken');

const User= require("../models/schema");

const router = express.Router();



// router.post('/signupp',(req,res)=>{
//     res.send(req.body);
//     console.log(req.body);
// });

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

// router.post('/register',async(req,res)=>{

//     const {name,email,phone,work,password,cpassword}=req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error:'Plz fill the property'});
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:'email already Exist'});
//         }

//         const user =new User({name,email,phone,work,password,cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message:"registerd"});

//         }).catch((err)=>res.status(500).json({message:'failed to register'}))
//     }).catch(err=>{console.log(err);});
    
// });

//using promises

router.post('/register',async(req,res)=>{

    const {name,email,phone,work,password,cpassword}=req.body;

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:'Plz fill the property'});
    }

    try {
        const userExist =await User.findOne({email:email});

        if(userExist){
            return res.status(422).json({error:'email already Exist'});
        }

        const user =new User({name,email,phone,work,password,cpassword});
        
        
        // const userRegister=
        await user.save();  
        
        res.status(201).json({message:"registerd"});

        // if(userRegister){
        //     res.status(201).json({message:"registerd"});
        // }else{
        //     res.status(500).json({message:'failed to register'});
        // }

        

        
    
    } catch (error) {
        console.log(err);
    }


    
    
});


//login route
router.post('/signin', async(req,res)=>{
    // console.log(req.body);
    // res.json(req.body)

    try {
        let token;
        const {email,password}=req.body;

        if(!email || !password){
            return res.status(400).send('please fill the data');
        }

        const userLogin= await User.findOne({email:email});

        if (userLogin) {
            const isMatch= await bcrypt.compare(password,userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie('jwtoken',token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });

            if (!isMatch) {
                res.status(400).json({message:'invalid Credential'});
            } else {
                res.json({message:"user login Successfull"});
            }
        } else {
            res.status(400).json({message:'invalid Credential'});
        }

        

        


    } catch (error) {
        console.log(error);
    }

})

module.exports=router;