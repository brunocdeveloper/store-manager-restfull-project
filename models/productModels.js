const { ObjectId } = require('mongodb');
const connection = require('./connection');

// insere o novo produto no bd.
const createProduct = async (name, quantity) => {
  const db = await connection();
  const data = await db.collection('products').insertOne({ name, quantity });

  return { _id: data.insertedId, name, quantity };
};

// recebe o nome do produto e o retorna caso exista.
const productExists = async (name) => {
  const db = await connection();
  const data = await db.collection('products').findOne({ name });
  return data;
};

const getAllProducts = async () => {
  const db = await connection();
  const data = await db.collection('products').find().toArray();
  return data;
};

const getProductsById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await connection();
  const data = await db.collection('products').findOne({ _id: ObjectId(id) });

  return data;
};

module.exports = { createProduct, productExists, getAllProducts, getProductsById };