const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const cors = require('cors')
const port  = process.env.PORT || 5000

connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())

app.use('/api/products', require('./routes/productsRoutes'))
app.use('/api/users', require('./routes/userRoute'))
app.use(errorHandler)
 
 
app.listen(port, () => console.log(`Server running on port ${port}`))