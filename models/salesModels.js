const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createSales = async (itensSold) => {
  const db = await connection();
  const data = await db.collection('sales').insertOne({ itensSold });
  return {
    _id: data.insertedId,
    itensSold,
  };
};

const getAllSales = async () => {
  const db = await connection();
  const data = await db.collection('sales').find().toArray();
  return data;
};

const getSalesById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await connection();
  const data = await db.collection('sales').findOne({ _id: ObjectId(id) });
  return data;
};

const editSalesById = async (id, body) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await connection();
  const data = await db.collection('sales').updateOne({ _id: ObjectId(id) },
  { $set: { itensSold: body } });

  return data;
};

module.exports = { createSales, getAllSales, getSalesById, editSalesById };