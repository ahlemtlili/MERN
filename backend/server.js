const express = require('express')
const productRouter=require('./routes/productRoutes')
const userRouter=require('./routes/userRoutes')

const connectdb=require('./config/connectDb')
require('dotenv').config({path:"./config/.env"})
const cors = require('cors')
//console.log(process.env.MONGO_URI)
const app = express()
app.use(express.json())
app.use(cors()) // Use this after the variable declaration
connectdb()
app.use('/products',productRouter)
app.use('/users',userRouter)
const port = 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))