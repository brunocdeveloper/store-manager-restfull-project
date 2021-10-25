const { createSales } = require('../models/salesModels');
const { validateSaleQuantity } = require('./validateSales');

const createNewSales = async (req, res) => {
  const { body } = req;
  const validate = await validateSaleQuantity(body);
  if (validate) {
    const data = await createSales(body);
    return res.status(200).json(data);
  }
  return res.status(422).json({
    err: {
      code: 'invalid_data',
      message: 'Wrong product ID or invalid quantity',
    },
  });
};

module.exports = { createNewSales };