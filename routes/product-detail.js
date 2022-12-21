const express = require('express');
const productController = require('../controllers/products');

const router = express.Router();

router.get('/product-detail/:productId', productController.getProductDetail);

module.exports = router;
