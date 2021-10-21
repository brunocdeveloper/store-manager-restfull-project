const {
  createProduct,
  productExists,
  getAllProducts,
  getProductsById } = require('../models/productModels');

const postProduct = async (req, res) => {
  const { name, quantity } = req.body;

  const product = await productExists(name);

  if (product) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: 'Product already exists',
      },
    }); 
  }

  const newProduct = await createProduct(name, quantity);
  return res.status(201).json(newProduct);
};

const allProducts = async (req, res) => {
  const products = await getAllProducts();
  return res.status(200).json({
    products: [...products],
  });
};

const productById = async (req, res) => {
  const { id } = req.params;
  const products = await getProductsById(id);

  if (!products) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      },
    }); 
  }

  return res.status(200).json(products);
};

module.exports = { postProduct, allProducts, productById };
