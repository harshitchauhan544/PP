const express = require('express')
const {getProductsController} = require('../controllers/getProductsController.js')
const {postProductsController} = require('../controllers/postProductsController.js')

// exports.productRouter = express.Router();
const productRouter = express.Router();

productRouter.get('/',getProductsController);

productRouter.post('/',postProductsController);

module.exports = {
    productRouter,
};

