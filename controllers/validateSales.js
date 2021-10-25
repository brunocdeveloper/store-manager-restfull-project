const validateSaleQuantity = (body) => {
  const validate = body.every(({ quantity }) => {
    if (quantity <= 0 || typeof quantity !== 'number') {
      return false;
    }
    return true;
  });
  return validate;
};

module.exports = { validateSaleQuantity };