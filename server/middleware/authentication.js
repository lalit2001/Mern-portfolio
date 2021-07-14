
const jwt = require('jsonwebtoken');
const User= require("../models/schema");
const authentication=async(req,res,next)=>{

    try {
        const token=req.cookies.jwtoken;
        
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY);
        
        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});
        
        if(!rootUser){ throw new Error('user not found')}

        req.token=token;
        req.rootUser=rootUser;
        req.UserId=rootUser._id;
        next(); 
    } catch (error) {
        // const token=req.cookies.jwtoken;
        // console.log(token)
        res.status(401).send('unautherised');
    }
}

module.exports=authentication;