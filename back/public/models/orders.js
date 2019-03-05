const mongoose= require("mongoose")

const schema= mongoose.Schema;

const purchase= new schema({
    id:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
})

const myModel= mongoose.model('purchase',purchase);

module.exports=myModel;



