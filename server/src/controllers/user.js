const User = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const registerNewUser = async(req, res) => {
    try{
        const existingUser = await User.findOne({phoneNumber: req.body.phoneNumber});
        if (existingUser) {
            return res.status(403).json({
                msg: "Phone number already exist"
            })
        }
        const hashPass = await bcrypt.hash(req.body.password, saltRounds)
        req.body.password = hashPass
        await User.create(req.body)
        res.json({
            msg: "registered successfully"
        })
    }catch(err){
        console.log(err)
    }

}

const loginUser = async(req, res) => {
    try{
        const userDetails = await User.findOne({email: req.body.email})
        if (userDetails) {
            const match = await bcrypt.compare(req.body.password, userDetails.password)
            if (match){
                const token = jwt.sign({ email: req.body.email }, 'shhhhh');
                res.json({
                    msg: "Login Successful",
                    token,
                    userDetails
                })
            }else{
                res.json({
                    msg: "Incorrect password"
                })
            }
        }else{
            res.status(403).json({
                msg: 'Invalid email'
            })
        }
    }catch(err){
        console.log(err)
    }

}
module.exports = { registerNewUser, loginUser }