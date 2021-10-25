const connection = require('./connection');

const createSales = async (itensSold) => {
  const db = await connection();
  const data = await db.collection('sales').insertOne({ itensSold });
  return {
    _id: data.insertedId,
    itensSold,
  };
};

module.exports = { createSales };