const category=require('../models/category');

//post one category
//method post
//params body
exports.postCategory= async(req, res) => {
  try{  let newCategory = new category({...req.body});
let result=await   newCategory.save()
res.send({result:result, msg:"category added"})
  }
catch(error){
res.send(error)
}
};

  //get all categories
 //method get
exports.getCategories=async(req, res) => {
   try{
     let result=await category.find()
     res.send({result:result, msg:"all categories"})
   }
   catch(error){
     res.send("error")
   }
 };

 //get one category
 //method get
//params _id
 exports.getOneCategory= async(req, res) => {
  try{
    let result=await category.findOne({_id:req.params.id})
    res.send({result:result, msg:"category found"})
  }
  catch(error){
    res.send("error")
  }
};

//delete one category
 //method delete
//params _id
  exports.deleteOneCategory=async(req, res) => {
  try{
    let result=await category.deleteOne({_id:req.params.id})
   result.n? res.send({result:result, msg:"category deleted"}):res.send({result:result,msg:'already deleted'})
  }
  catch(error){
    res.send("error")
  }
};

//update one category
 //method put
//params _id and body
 exports.updateCategory= async(req, res) => {
  try{
    let result=await category.updateOne({_id:req.params.id},{$set:{...req.body}})
   res.send({result:result, msg:"category updated"})
  }
  catch(error){
    res.send("error")
  }
};



