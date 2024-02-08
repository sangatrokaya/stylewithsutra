const express = require('express')
router = express.Router()
const { addNewProducts } = require('../controllers/products')
router.post('/products', addNewProducts)
module.exports = router