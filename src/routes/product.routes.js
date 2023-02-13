const { Router } = require('express');
const productController = require('../controllers/product.controller');

const route = Router();

route.get('/', productController.getAll);
route.get('/:id', productController.getById);

module.exports = route;