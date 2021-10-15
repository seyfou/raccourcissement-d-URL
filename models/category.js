const mongoose=require("mongoose");
const schema=mongoose.Schema;
const categorySchema=new schema({
    categoryImage:{
        type:String,
        required:true
    },
     titleUrl:{
          type:String,
          required:true
      },
      dateRes:{
          type:String,
          default:Date.now()
      },
      
      num:{
          type:String,
          
      },
     
      userName:{
          type:String,
          
      },
      userLastName:{
          type:String,
         
      },
      imageUrl:{
          type:String,
          
      },
      status:{
          type:String,
          default:("consulté")
      }
  
  
   
});


module.exports=mongoose.model("category",categorySchema)