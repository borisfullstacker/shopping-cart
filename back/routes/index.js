var express = require('express');
var router = express.Router();
var productController = require('../public/models/products')
var purchaseController = require('../public/models/orders')

/* GET home page. */
router.get('/products', async function(req, res, next) {
       try{
          let products= await productController.find({})
          res.json(products);
       }catch(err){
         console.log(err)
       }
});


router.post('/products', async function(req,res,next){
   try{
     let item = new productController(req.body);
     let result= await item.save();
     res.json(result);
    }catch(err){
      console.log(err);
    }
});



router.post('/buy',async function(req,res,next){
  try{
    let addedItem= new purchaseController({id:req.body._id,price:req.body.price})
    let result = await addedItem.save()
    res.json(result);
  }catch(err){
    console.log("in catch",err);
  }
});

router.get('/buy', async function (req,res,next){
 try{
   let result= await purchaseController.find({});
   res.json(result.reverse());
 }catch(err){
   console.log(err)
 }
});


module.exports = router;
