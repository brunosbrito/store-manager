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

const getAllSales = async () => {
  const [result] = await connection
    .query(`SELECT sale_id as saleId, date,product_id as productId,quantity
    FROM StoreManager.sales_products as sp JOIN StoreManager.sales as s
    ON sp.sale_id = s.id ORDER BY sale_id, product_id`);

  return result;
};

const getByIdSales = async (id) => {
  const [result] = await connection.query(
    `SELECT date, product_id as productId, quantity 
    FROM StoreManager.sales_products as sp
    JOIN StoreManager.sales as s
    ON sp.sale_id = s.id
    WHERE sp.sale_id = ?
    ORDER BY sale_id, product_id`,
    [id],
  );

  console.log(id);
  if (result.length === 0) return null;
  return result;
};

// const updateSales = async (saleId, productId, quantity) => {
//   await connection.query(
//     `UPDATE StoreManager.sales_products 
//     SET product_id = ?, quantity = ? 
//     WHERE sale_id = ? AND product_id = ?`,
//     [productId, quantity, productId],
//   );
//   return { productId, quantity };
// };

module.exports = { addNewSale, createNewSale, getAllSales, getByIdSales };