const User = require('../models/products')
const addNewProducts = async(req, res) => {
    await User.create(req.body)
    res.json({
        msg: "added successfully"
    })
}

module.exports = { addNewProducts }