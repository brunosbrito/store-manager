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

  if (!sale) return null;
  return sale;
};

const deleteSales = async (id) => {
  const saleId = await salesModel.getByIdSales(id);
  if (!saleId) return null;
  const res = await salesModel.deleteSales(id);
  return res;
};

const updateSales = async (saleId, saleArray) => {
  const id = await salesModel.getByIdSales(saleId);
  
  if (!id) return null;

  const sales = await Promise.all(saleArray.map(({ productId, quantity }) =>
    salesModel.updateSales(saleId, productId, quantity)));
  
  return { saleId, itemsUpdated: sales };
};

module.exports = { addNewSale, getAllSales, getByIdSale, deleteSales, updateSales };