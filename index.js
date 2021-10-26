const express = require('express');
const bodyParser = require('body-parser');
const { 
  postProduct,
  allProducts,
  productById,
  editProduct,
  deleteById } = require('./controllers/controllers');
const { validateName, validateQuantity } = require('./controllers/validates');
const { 
  createNewSales,
  allSales,
  salesById,
  /* editSale,
  deleteSalesById */ } = require('./controllers/salesControllers');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.post('/products', validateName, validateQuantity, postProduct);

app.get('/products', allProducts);

app.get('/products/:id', productById);

app.put('/products/:id', validateName, validateQuantity, editProduct);

app.delete('/products/:id', deleteById);

app.post('/sales', createNewSales);

app.get('/sales', allSales);

app.get('/sales/:id', salesById);

/* app.put('/sales/:id', editSale);

app.delete('/sales/:id', deleteSalesById); */

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
