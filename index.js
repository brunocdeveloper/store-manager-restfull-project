const express = require('express');
const bodyParser = require('body-parser');
const { postProduct, allProducts, productById } = require('./controllers/controllers');
const { validateName, validateQuantity } = require('./controllers/validates');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', allProducts);

app.get('/products/:id', productById);

app.post('/products', validateName, validateQuantity, postProduct);

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
