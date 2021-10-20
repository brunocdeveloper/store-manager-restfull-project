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

module.exports = { createProduct, productExists };