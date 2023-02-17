const { Router } = require('express');

const salesController = require('../controllers/sales.controller');
const { salesMidd, checkProductId } = require('../middlewares/validationsSales');

const route = Router();

route.post('/', salesMidd, checkProductId, salesController.addNewSale);
route.get('/', salesController.getAllSales);
route.get('/:id', salesController.getByIdSale);
route.delete('/:id', salesController.deleteSales);
route.put('/:id', salesMidd, checkProductId, salesController.updateSales);

module.exports = route;