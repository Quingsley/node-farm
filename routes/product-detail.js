const express = require('express');
const productController = require('../controllers/products');

const router = express.Router();

router.get('/product-detail', productController.getProductDetail);

module.exports = router;
