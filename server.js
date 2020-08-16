const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))