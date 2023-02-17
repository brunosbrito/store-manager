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

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const productDelete = await productServices.deleteProduct(id);
  if (!productDelete) {
    return res.status(404).json(
      { message: 'Product not found' },
    );
  }
  return res.status(204).json();
};

const searchProduct = async (req, res) => {
  const { q } = req.query;
  const productSearch = await productServices.searchProduct(q);
  
  return res.status(200).json(productSearch);
};
module.exports = { getAll, getById, addNewProduct, updateProduct, deleteProduct, searchProduct };