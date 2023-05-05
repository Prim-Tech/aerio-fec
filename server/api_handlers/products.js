const axios = require('axios');
require('dotenv').config();

const defaultHost = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp";
const envHost = process.env.PRODUCTS_API;
const APIHostURL = envHost || defaultHost;
const APIKey = process.env.FEC_API_KEY;

// params:
  // page (INT) -- slects page of results to return, defaulted to 1
  // count (INT) -- specifies how many results per page to return, defaulted to 5
const auth = APIHostURL === defaultHost ? {headers: {Authorization: APIKey}} : {};
const getAllProducts = () => {
  return axios.get(`${APIHostURL}/products`, {
    //optional key/values of page/pageNumber and count/countNumber
    auth
  });
}

const getOneProduct = (product_id) => {
  return axios.get(`${APIHostURL}/products/${product_id}`, {
    auth
  })
}

const getStyles = (product_id) => {
  return axios.get(`${APIHostURL}/products/${product_id}/styles`, {
    auth
  })
}

const getRelated = (product_id) => {
  return axios.get(`${APIHostURL}/products/${product_id}/related`, {
    auth
  })
}

module.exports.getAllProducts = getAllProducts;
module.exports.getOneProduct = getOneProduct;
module.exports.getStyles = getStyles;
module.exports.getRelated = getRelated;
