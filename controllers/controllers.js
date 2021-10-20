const { createProduct, productExists } = require('../models/productModels');

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

module.exports = { postProduct };
