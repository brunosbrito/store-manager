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

const addNewProduct = async (name) => {
  const id = await productModel.addNewProduct(name);

  console.log(id);
  const product = { id, name };

  return product;
};

module.exports = { getAll, getById, addNewProduct };