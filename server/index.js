const express = require('express');
const path = require('path');

const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const Authentication = require('./config.js');
// TODO: add cors

const app = express();
const PORT = 3000;
const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/';
const fullPath = path.join(__dirname, '/../client/dist');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(fullPath));

app.use('/(\\w)+', createProxyMiddleware({
  target: baseURL,
  changeOrigin: true,
  headers: Authentication,
}));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
