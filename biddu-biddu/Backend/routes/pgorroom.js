const express = require('express')
const router = express.Router()
const multer = require("multer");
const PGorRoom = require('../models/PGorRoom')
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

 router.post("/newpgroom", upload.array("img",20), (req, res) => {  // through postman

    var fileinfo =req.files;
    var imgarray=[];

    if(fileinfo)
    for(let i=0;i<fileinfo.length;i++)
    {
        let eleimg={data: fs.readFileSync("uploads/" + fileinfo[i].filename),
          contentType: "image/png"}

        imgarray.push(eleimg);  
  
    }
    
    const saveImage =  new PGorRoom({

      type: req.body.type,
      for: req.body.for,
      acNonac: req.body.acNonac,
      wifi: req.body.wifi,
      seater: req.body.seater,
      lateBath: req.body.lateBath,
      kitchen: req.body.kitchen,
      diet: req.body.diet,
      electricity: req.body.electricity,
      furnished: req.body.furnished,
      ownerName: req.body.ownerName,
      contact_number: req.body.contact_number,
      price: req.body.price,
      price_desc: req.body.price_desc,
      address: req.body.address,
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



router.get('/fetchallpgoroom',async (req,res) =>{

    try{
        const pgorroom = await PGorRoom.find()
        // console.log("pgroom db"+pgorroom)
        res.json(pgorroom)
    }
    catch(error){
        console.log(error); //logger sqs
        console.log("ERRER")
        res.status(500).send("Internal error occurred");

    }
   
})

module.exports = router