const { Router } = require('express');

const salesController = require('../controllers/sales.controller');
const { salesMidd, checkProductId } = require('../middlewares/validationsSales');

const route = Router();

route.post('/', salesMidd, checkProductId, salesController.addNewSale);
route.get('/', salesController.getAllSales);
route.get('/:id', salesController.getByIdSale);

module.exports = route;