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

  const product = { id, name };

  return product;
};

const checkProduct = async (productid) => {
  const product = await productModel.getById(productid);
    if (!product) return false;
};

module.exports = { getAll, getById, addNewProduct, checkProduct };