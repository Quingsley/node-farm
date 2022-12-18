const ProductData = require('../models/product');
const url = require('url');

exports.getProducts = (req, resp, next) => {
  ProductData.fetchAll((products) => {
    resp.render('index', { products: products });
  });
};

exports.getProductDetail = (req, resp, next) => {
  const { query } = url.parse(req.url, true);
  ProductData.fetchAll((products) => {
    const currentProduct = products[query.id];
    resp.render('product', { currentProduct: currentProduct });
  });
};
