const mongoose = require ('mongoose')

const schema = mongoose.Schema;


const product = new schema({

    name: {
        type:String,
        required:[true,"Plese insert a number"]
    },
    pic:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }

})


const myModel= mongoose.model('product',product);

module.exports=myModel;