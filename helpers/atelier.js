const axios = require('axios');
const Authorization = require('../server/config.js');

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea';

const getAllProducts = () => {
  // console.log('getAllProducts');
  const fullURL = `${baseURL}/products/`;
  return axios({
    method: 'get',
    url: fullURL,
    headers: Authorization,
  })
    .then((response) => (response))
    .catch((error) => (error));
};

module.exports = {
  getAllProducts,
};
