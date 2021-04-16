const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const { getAllProducts } = require('../helpers/atelier');

const fullPath = path.join(__dirname, '/../client/dist');
// console.log(fullPath);
app.use(express.json());
app.use(express.static(fullPath));

app.get('/products', (req, res) => {
  getAllProducts()
    .then((response) => {
      res.status(201).send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
