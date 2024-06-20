const Product = require('../models/products')
const addNewProducts = async(req, res) => {
    try {
        if (req.file) {
            await Product.create({...req.body})
        }
    } catch (error) {
        throw console.log(error);
    }
}

module.exports = { addNewProducts };