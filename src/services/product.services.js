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

const updateProduct = async (id, name) => {
  const checkId = await productModel.getById(id);
  if (!checkId) return null;
  const res = await productModel.updateProduct(id, name);
  return res;
};

const deleteProduct = async (id) => {
  const checkId = await productModel.getById(id);
  if (!checkId) return null;
  const res = await productModel.deleteProduct(id);
  return res;
};

const searchProduct = async (q) => {
  const data = await productModel.getAll();
  console.log(data);
  const result = q
    ? data.filter(({ name }) => name.includes(q))
    : data;
  
  return result;
};

module.exports = {
  getAll,
  getById,
  addNewProduct,
  checkProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};