const connection = require('./connection');

const addNewSale = async () => {
  const [{ insertId }] = await connection.query(
    'INSERT INTO StoreManager.sales (date) VALUES (now())',
  );
  return insertId;
};

const createNewSale = async (info) => {
  const { saleId, productId, quantity } = info;
  await connection.query(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?,?,?)',
    [saleId, productId, quantity],
  );
  return { productId, quantity };
};

module.exports = { addNewSale, createNewSale };