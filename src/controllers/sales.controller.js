const salesServices = require('../services/sales.services');

const addNewSale = async (req, res) => {
  const sales = await salesServices.addNewSale(req.body);
  return res.status(201).json(sales);
};

const getAllSales = async (_req, res) => {
  const data = await salesServices.getAllSales();
  return res.status(200).json(data);
};

const getByIdSale = async (req, res) => {
  const { id } = req.params;

  const sale = await salesServices.getByIdSale(id);

  console.log(id);
  if (!sale) {
    return res.status(404).json({
      message: 'Sale not found',
    });
  }

  return res.status(200).json(sale);
};

// const updateSales = async (req, res) => {
//   const { id } = req.params;
//   const newSale = await salesServices.updateSales(id, req.body);
//   if (!newSale) {
//  return res.satus(404).json(
//     { message: 'Sale not found' },
//   ); 
// }

//   return res.status(200).json(newSale);
// };
module.exports = { addNewSale, getAllSales, getByIdSale };