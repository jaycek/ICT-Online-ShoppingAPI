const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const mongourl = process.env.MONGODB_URL
const connectDB = ()=>{
    mongoose.connect(mongourl)
    .then(()=>console.log("DB connected.."))
    .catch((error)=>console.log(error))
}

module.exports = connectDB