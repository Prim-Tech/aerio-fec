const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const products_api = require('./api_handlers/products');

const expressStaticGzip = require('express-static-gzip');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(expressStaticGzip(path.join(__dirname,'../client/dist'), {
  enableBrotli: true
}));

// PRODUCT ROUTES:
app.get('/products', (req, res) => {
  console.log('GET request to /products');
  products_api.getAllProducts()
    .then(allProducts => {
      res.status(200).send(allProducts.data);
    })
    .catch(error => {
      console.error('Error in getAllProducts: ', error.message);
      res.status(404).send(error);
    });
});

app.get('/products/:product_id', (req, res) => {
  var product_id = req.params.product_id;
  console.log('GET request to /products/:product_id');
  products_api.getOneProduct(product_id)
    .then((productDetails) => {
      res.status(200).send(productDetails.data)
    })
    .catch((error) => {
      console.error('Error in getOneProduct: ', error.message);
      res.status(404).send(error);
    })
});

app.get('/products/:product_id/related', (req, res) => {
  var product_id = req.params.product_id;
  console.log('GET request to /products/:product_id/related');
  products_api.getRelated(product_id)
    .then((relatedProducts) => {
      res.status(200).send(relatedProducts.data)
    })
    .catch((error) => {
      console.error('Error in getRelated: ', error.message);
      res.status(404).send(error);
    })
});

app.get('/products/:product_id/styles', (req, res) => {
  var product_id = req.params.product_id;
  console.log('GET request to /products/:product_id/styles');
  products_api.getStyles(product_id)
    .then((productStyles) => {
      res.status(200).send(productStyles.data)
    })
    .catch((error) => {
      console.error('Error in getStyles: ', error.message);
      res.status(404).send(error);
    })
});

app.listen(port, function(){
  console.log(`Connected to server: http://localhost:${port}`);
});
