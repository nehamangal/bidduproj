const express = require('express')
const router = express.Router()
const multer = require("multer");
const Tiffin = require('../models/Tiffin')
const fs = require("fs");
const { body, validationResult } = require("express-validator");



const storage = multer.diskStorage({   // stored into local disk
    destination: (req, file, cb) => {
      cb(null, "uploads");      // callback(detinmation folder)
    },
    filename: (req, file, cb) => { // what name the file should be
      cb(null, file.originalname);
    },
  });

  const upload = multer({ storage: storage });

 router.post("/newtiffin", upload.array("img",20), (req, res) => {  // through postman

    var fileinfo =req.files;
    var imgarray=[];

    if(fileinfo)
    for(let i=0;i<fileinfo.length;i++)
    {
        let eleimg={data: fs.readFileSync("uploads/" + fileinfo[i].filename),
          contentType: "image/png"}

        imgarray.push(eleimg);  
  
    }
    
    const saveImage =  new Tiffin({

      name: req.body.name,
      quantity: req.body.quantity,
      pickndrop: req.body.pickndrop,
      timing: req.body.timing,
      address: req.body.address,
      price: req.body.price,
      ownerName: req.body.ownerName,
      mobileNumber: req.body.mobileNumber,
      price_decs: req.body.price_decs,
      img: imgarray
    });

    console.log("req");

    console.log(req)
    saveImage
      .save()
      .then((res) => {
        console.log("image is saved");
      })
      .catch((err) => {
        console.log(err, "error has occur");
      });
      res.send(fileinfo)
  });



router.get('/fetchalltiffin',async (req,res) =>{

    try{
        const tiffin = await Tiffin.find()
        // console.log("pgroom db"+pgorroom)
        res.json(tiffin)
    }
    catch(error){
        console.log(error); //logger sqs
        console.log("ERRER")
        res.status(500).send("Internal error occurred");

    }
   
})

module.exports = router