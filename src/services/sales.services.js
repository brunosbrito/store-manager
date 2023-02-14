const salesModel = require('../models/sales.model');

const addNewSale = async (info) => {
  const id = await salesModel.addNewSale();
    const sales = await Promise.all(info.map(({ productId, quantity }) =>
      salesModel.createNewSale({ saleId: id, productId, quantity })));
  return { id, itemsSold: sales };
};

module.exports = { addNewSale };