const mongoose=require('mongoose');

const Schema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minlength:true
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email id is present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email');
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    },
    work:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true,
    }
});

const User=new mongoose.model('user',Schema);

module.exports=User;