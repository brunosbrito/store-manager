const salesServices = require('../services/sales.services');

const addNewSale = async (req, res) => {
  const sales = await salesServices.addNewSale(req.body);
  return res.status(201).json(sales);
};

module.exports = { addNewSale };