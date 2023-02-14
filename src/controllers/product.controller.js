const productServices = require('../services/product.services');

const getAll = async (_req, res) => {
  const data = await productServices.getAll();
  return res.status(200).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const product = await productServices.getById(id);
  if (!product) {
 return res.status(404).json(
    { message: 'Product not found' },
  ); 
}

  return res.status(200).json(product);
};

const addNewProduct = async (req, res) => {
  const { name } = req.body; 
  const product = await productServices.addNewProduct(name);
  
  return res.status(201).json(product);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const productUpdate = await productServices.updateProduct(id, name);

  console.log(productUpdate);
  if (!productUpdate) {
 return res.status(404).json(
    { message: 'Product not found' },
  );
  }
  return res.status(200).json(productUpdate);
};
module.exports = { getAll, getById, addNewProduct, updateProduct };