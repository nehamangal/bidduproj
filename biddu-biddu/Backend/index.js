const connectToMongo = require('./db')
const express = require('express')


connectToMongo();
const app = express();
var cors = require('cors')
const port =5000

app.use(cors())

app.use(express.json())  // get res body in routes

app.use('/api/pgorroom', require('./routes/pgorroom'))
app.use('/api/tiffin', require('./routes/tiffin'))


app.listen(port, ()=>{
    console.log(`app listening at http://localhost:${port}`)
})