/* const { productExists, createProduct } = require('../models/productModels');

const postProducts = async (name, quantity) => {
  const productFound = await productExists(name);

  if (productFound) return productFound;

  const product = await createProduct({ name, quantity });
  return product;
};

module.exports = { postProducts }; */