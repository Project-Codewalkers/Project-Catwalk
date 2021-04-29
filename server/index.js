const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');
const Authentication = require('./config.js');

const app = express();

const PORT = 3000;
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea';
const fullPath = path.join(__dirname, '/../client/dist');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(fullPath));

app.get(/\w+/, (req, res) => {
  const apiPath = `${API_URL}${req.url}`;
  const { params } = req;
  console.log('apiPath', apiPath, 'with params', params);
  axios.get(apiPath, {
    headers: Authentication,
    params,
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log('Error:');
      // res.sendStatus(500);
      res.status(500).send(error);
    });
});

app.post(/\w+/, (req, res) => {
  const apiPath = `${API_URL}${req.url}`;
  const { params } = req;
  console.log('apiPath', apiPath, 'with params', params);
  axios.post(apiPath, {
    headers: Authentication,
    params,
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log('Error:');
      // res.sendStatus(500);
      res.status(500).send(error);
    });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
