const salesSchema = require('./salesSchema');
const productService = require('../services/product.services');

const validateSchema = (sale) => {
  const isValid = salesSchema.validate(sale);
  return isValid;
};

const salesMidd = (req, res, next) => {
  const product = [...req.body];
  const { error } = validateSchema(product);
  console.log(error);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(+code).json({ message });
  }

  next();
};

const checkProductId = async (req, res, next) => {
  const arrSale = req.body;
  const response = await Promise.all(arrSale
    .map((sale) => productService.checkProduct(sale.productId)));

  if (response.some((r) => r === false)) {
    return res.status(404).json({ message: 'Product not found' });
  }

  next();
};

module.exports = { salesMidd, checkProductId };
