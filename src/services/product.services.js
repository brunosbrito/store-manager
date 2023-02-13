const productModel = require('../models/product.model');

const getAll = async () => {
  const products = await productModel.getAll();
  return products;
};

const getById = async (id) => {
  const product = await productModel.getById(id);
  if (!product) return null;

  return product;
};

module.exports = { getAll, getById };