const { Router } = require('express');
const productController = require('../controllers/product.controller');
const validationProduct = require('../middlewares/validationProduct');

const route = Router();

route.get('/', productController.getAll);
route.get('/:id', productController.getById);
route.post('/', validationProduct, productController.addNewProduct);

module.exports = route;