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

module.exports = { getAll, getById };