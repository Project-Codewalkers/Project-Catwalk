const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const Authentication = require('./config.js');

const app = express();

const PORT = 3000;
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/';
const fullPath = path.join(__dirname, '/../client/dist');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(fullPath));

app.use('/(\\w)+', createProxyMiddleware({
  target: API_URL,
  changeOrigin: true,
  headers: Authentication,
}));

app.use('/(\\w)+', () => console.log(req.body) );

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
