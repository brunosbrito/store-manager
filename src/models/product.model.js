const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );

  return result;
};

const getById = async (id) => {
  const [[product]] = await connection.query(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  if (!product) return null;
  return product;
}; 

const addNewProduct = async (name) => {
  const [{ insertId }] = await connection.query(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [name],
  );

  return insertId;
};

const updateProduct = async (id, name) => {
  await connection.query(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  
  return { name, id };
};

const deleteProduct = async (id) => {
  await connection.query(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [id],
  );

  return { id };
};
module.exports = { getAll, getById, addNewProduct, updateProduct, deleteProduct };