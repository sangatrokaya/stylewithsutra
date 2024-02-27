const mongoose = require('mongoose')
// const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
    productName: String, // String is shorthand for {type: String}
    brand: String,
    category: String,
    price: String,
    stock: String,
    description: String,
    image: String,
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product