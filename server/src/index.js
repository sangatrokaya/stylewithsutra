const express = require('express')
const app =  express()
const connection = require('./db/connection')
const cors = require('cors')
app.use(cors())
require('dotenv').config()
app.use(express.json()) //body parser
connection()
const userRoute = require('./routes/user')
app.use(userRoute)

const User = require('./models/user')

const port = process.env.PORT

app.get('/', (req, res) => {
    User.create(req.body)
    res.send({msg: "User registered successfully!!"})
})

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})