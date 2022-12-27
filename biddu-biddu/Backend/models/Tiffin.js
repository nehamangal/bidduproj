const mongoose = require("mongoose")
const {Schema} = mongoose

const TiffinSchema = new Schema({
     name:{
          type:String
          
     },
    quantity:{
         type:String,
      
    },
 
    pickndrop:{
     type:String,
    
    },
    timing: {
     type:String,
     
    },
 
    address:{
     type:String
   
    },

    price:{
        type:String
    },

    ownerName:{
        type:String
    },
    mobileNumber:{
        type:String
    },
    price_decs:{
        type:String

    },
    img: [{
        data: Buffer,
        contentType: String
      }]
   

   });


module.exports = mongoose.model('tiffin', TiffinSchema);