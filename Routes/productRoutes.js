const Router = require('express').router();

const { validateName, validateQuantity } = require('../controllers/validates');
const { 
  postProduct,
  allProducts,
  productById,
  editProduct,
  deleteById } = require('../controllers/controllers');

Router.get('/', allProducts);
