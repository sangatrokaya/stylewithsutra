const express = require('express')
const connection = require('./db/connection')
const app =  express()
app.use(express.json())
const port = 5000
connection()
const User = require('./models/user')



app.post('/register', (req, res) => {
    User.create(req.body)
    res.send({msg: "User registered successfully!!"})
})

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})