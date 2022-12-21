const ProductData = require('../models/product');
const url = require('url');

exports.getProducts = (req, resp, next) => {
  ProductData.fetchAll((products) => {
    resp.render('index', { products: products });
  });
};

exports.getProductDetail = (req, resp, next) => {
  const prodId = req.params.productId;
  console.log();
  ProductData.fetchAll((products) => {
    const currentProduct = products[prodId];
    resp.render('product', { currentProduct: currentProduct });
  });
};

exports.postCart = (req, resp, next) => {
  const prodId = req.body.productId;
  console.log(prodId);
  resp.render('cart');
};
