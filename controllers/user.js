const User=require('../models/user')
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const { sendConfirmationEmail } = require('../config/nodemailer.config');



require ('dotenv').config({path:"./.env"})


exports.register=async(req,res)=>{

    const {name,lastName,email,password,isAdmin,status}=req.body;
    try {

      const token=jwt.sign({email}, process.env.secretOrKey)

        const user=new User({name,
          lastName,
          email,
          password: bcrypt.hashSync(password,8),
          isAdmin,
          status,
          confirmationCode: token});

//check if the email exist
const searchedUser= await User.findOne({email})
if (searchedUser){
   return res.status(400).send({msg:"User already exist"})
   
}
else{
    
user.save((err) => {
  if (err) {
    res.status(500).send({ message: err });
         return;
      }
     res.status(200).send({ msg: "User was registered successfully! Please check your email", });
      
    
 sendConfirmationEmail(user.name, user.email, user.confirmationCode);
    
});
}

    } catch (error) {
        res.status(500).send({msg:"Can not save the user"})
    }
};

exports.login=async(req,res)=>{

  const {name,lastName,email,password,isAdmin,status}=req.body;
  try {

    const token=jwt.sign({email}, process.env.secretOrKey)

      const user=new User({name,
        lastName,
        email,
        password: bcrypt.hashSync(password,8),
        isAdmin,
        status,
        confirmationCode: token});
      

        //find if the user exist
        const searchedUser= await User.findOne({email});
        //find if the email not exist
        if(!searchedUser){
            return res.status(400).send({msg:"Bad credential"})
        }
        //if password are equal
        const match=await bcrypt.compare(password,searchedUser.password);

        if (!match){
            return res.status(400).send({msg:"Bad credential"})
        }
        
        else{
        res.status(200).send({user:searchedUser,msg:"success",token:`Bearer ${token}`})
        }
    } catch (error) {

        res.status(500).send({msg:"Can not get the user"})
    }

};

exports.verifyUser =(req, res, next) => {
  
  User.findOne({confirmationCode: req.params.confirmationCode,})
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      user.status = "Active";
      user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
    })
    .catch((e) => console.log("error", e));
};

exports.current=(req,res)=>{try{
    res.status(200).send({user:req.user})}
    catch(error){
        console.log(error)
    }
};

exports.getUsers=async(req, res) => {
    try{
      let result=await User.find()
      res.send({result:result, msg:"all users"})
    }
    catch(error){
      res.send("error")
    }
  };


  //delete One User
  exports.deleteOneUser=async(req, res) => {
    try{
      let result=await User.deleteOne({_id:req.params.id})
     result.n? res.send({result:result, msg:"user deleted"}):res.send({result:result,msg:'already deleted'})
    }
    catch(error){
      res.send("error")
    }
  };


 exports.updateUser= async(req, res) => {
    try{
      let result=await User.updateOne({_id:req.params.id},{$set:{...req.body}})
     res.send({result:result, msg:"user updated"})
    }
    catch(error){
      res.send("error")
    }
  };

