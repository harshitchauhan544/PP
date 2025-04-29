const express = require('express')
const {getProductsController} = require('../controllers/getProductsController.js')
const {postProductsController} = require('../controllers/postProductsController.js')
const {validateCreateProductDto} = require('../dto/validateCreateProductDto.js')

// exports.productRouter = express.Router();
const productRouter = express.Router();

productRouter.get('/',getProductsController);

productRouter.post('/',
    validateCreateProductDto,
    postProductsController
);

module.exports = {
    productRouter,
};

