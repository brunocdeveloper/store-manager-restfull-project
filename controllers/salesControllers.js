const { createSales, getAllSales, getSalesById, editSalesById } = require('../models/salesModels');
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

const allSales = async (req, res) => {
  const sales = await getAllSales();
  return res.status(200).json({ sales });
};

const salesById = async (req, res) => {
  const { id } = req.params;

  const sales = await getSalesById(id);
  if (!sales) {
    return res.status(404).json({
      err: {
        code: 'not_found',
        message: 'Sale not found',
      },
    });
  }

  return res.status(200).json({ sales });
};

const editSale = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const validate = validateSaleQuantity(body);
  if (validate) {
    await editSalesById(id, body);
    return res.status(200).json({
      _id: id,
      itensSold: body,
    });
  }

  return res.status(422).json({
    err: {
      code: 'invalid_data',
      message: 'Wrong product ID or invalid quantity',
    },
  });
};

module.exports = { createNewSales, allSales, salesById, editSale };