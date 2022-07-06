const { query } = require("express");
const express = require("express");
const Product = require("../models/Product");
const router = express.Router();
//router.get('/', (req, res) => res.send('Hello World!'))
/**
 * @method Post
 * @description add a new product
 * @path '/products/addproduct'
 */

router.post("/addproduct", async (req, res) => {
  try {
    const searchProduct=await Product.findOne({name:req.body.name})
    if(searchProduct)
    {return res.status(400).send({msg:"name must be unique"})}
    const newProduct = new Product({ ...req.body });
    await newProduct.save();
    res.send({newProduct,msg:"the product is successfully added"})
  } catch (error) {
    console.log(error);
    res.status(400).send("failed to save")
  }
});
router.get("/",async(req,res)=>{
    //console.log(req)
    try {
    const price=req.query.price || 0
     const allProducts=await Product.find({price:{$gte:price}}) 
     res.send(allProducts)  
    } catch (error) {
        console.log(error)
        res.status(400).send("failed to get")
    }
})
router.delete("/:id",async(req,res)=>{
    try {
      const productDeleted=await Product.deleteOne({_id:req.params.id})  
      if(productDeleted.deletedCount){return res.send({msg:"product deleted "})}
      res.status(400).send({msg:"already deleted"})
    } catch (error) {
        console.log(error)
        res.status(400).send("failed to delete") 
    }
})
router.put("/:id",async(req,res)=>{
  try {
   // console.log({...req.body});
   const result=await Product.updateOne({_id:req.params.id},{$set:{...req.body}})
   const productUpdated=await Product.findOne({_id:req.params.id})

     //const result=await Product.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}},{new:true})
     if(result.modifiedCount){return res.send({msg:"product updated ",productUpdated})}
      res.status(400).send({msg:"already updated"})
    //console.log(result);
  } catch (error) {
    console.log(error)
    res.status(400).send("failed to update")
  }
})
router.get("/details/:id",async(req,res)=>{
  try {
     const oneProduct=await Product.findOne({_id:req.params.id}) 
     res.send({oneProduct})  
    } catch (error) {
        console.log(error)
        res.status(400).send("failed to get the product")
    }
 
}
)


module.exports = router;
