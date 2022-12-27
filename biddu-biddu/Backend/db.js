const mongoose = require('mongoose')

const mongoURI = "mongodb://localhost:27017/Biddu"

const connectToMongo = ()=>{           // async is func , it waits at await
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo")  //callback
    })
}

module.exports= connectToMongo
