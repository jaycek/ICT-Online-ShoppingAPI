const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')

const app = express()

app.use(express.json())
dotenv.config()

connectDB()

app.use('/api/products',productRoutes)
app.get('/',(req,res)=>{
    res.send("Hello world")
})

const PORT = process.env.PORT||5000
app.listen(PORT,
    ()=>console.log(`Server is listening on port ${PORT}`))