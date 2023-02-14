const salesModel = require('../models/sales.model');

const addNewSale = async (info) => {
  const id = await salesModel.addNewSale();
    const sales = await Promise.all(info.map(({ productId, quantity }) =>
      salesModel.createNewSale({ saleId: id, productId, quantity })));
  return { id, itemsSold: sales };
};

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();
  return sales;
};

const getByIdSale = async (id) => {
  const sale = await salesModel.getByIdSales(id);

  console.log(id);
  if (!sale) return null;
  return sale;
};

module.exports = { addNewSale, getAllSales, getByIdSale };