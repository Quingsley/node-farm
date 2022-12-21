const express = require('express');

const cartController = require('../controllers/products');

const router = express.Router();

router.post('/cart', cartController.postCart);

module.exports = router;
