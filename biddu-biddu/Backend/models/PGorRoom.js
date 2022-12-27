const mongoose = require("mongoose")
const {Schema} = mongoose

const PGorRoomSchema = new Schema({
     type:{
          type:String
          
     },
    for:{
         type:String,
      
    },
 
    acNonac:{
     type:String,
    
    },
    wifi: {
     type:String,
     
    },
 
    seater:{
     type:String
   
    },

    lateBath:{
        type:String
    },

    kitchen:{
        type:String
    },
    diet:{
        type:String
    },
    electricity:{
        type:String
    },
    furnished:{
        type:String
    },
    ownerName:{
        type:String
    },
    contact_number:{
        type:String
    },
    price:{
        type:String
    },
    price_desc:{
        type: String
    },
    address:{
        type:String
    },

    img: [{
        data: Buffer,
        contentType: String
      }]

   });


module.exports = mongoose.model('pgorroom', PGorRoomSchema);