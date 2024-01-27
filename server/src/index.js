const express = require('express')
const connection = require('./db/connection')
const app =  express()
app.use(express.json())
const userRoute = require('./routes/user')
app.use(userRoute)

connection()
const User = require('./models/user')

require('dotenv').config()
const port = process.env.PORT

app.get('/', (req, res) => {
    User.create(req.body)
    res.send({msg: "User registered successfully!!"})
})

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})