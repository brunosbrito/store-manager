const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/connection')
const productModel = require('../../../src/models/product.model');

const mockAllProducts = require('../mockAllProducts');
const { id } = require('../../../src/middlewares/productSchema');

describe('testa products Models', function () {
  beforeEach(sinon.restore)

  describe('testa getAll', function () {
    it('testa se retorna todos os produtos', async function() {
      sinon.stub(connection, 'execute').resolves([mockAllProducts]);
      const products = await productModel.getAll();
      expect(products).to.be.deep.equal(mockAllProducts);
    })
  })

  describe('testa getById', function () {
    it('testa se retorna um objeto com as chaves id e name', async function() {
      
      const productObj = { id: 1, name: "Matelo de thor"}
      
      sinon.stub(connection, 'execute').resolves([[productObj]]);

      const products = await productModel.getById(1);

      expect(products).to.be.all.keys('id', 'name');
    })
  })
})
describe('testa addNewProduct', function () {
    it('testa se é criado um produto com o id 4', async function () {
      const query = [{insertId: 4}];
        sinon.stub(connection, 'query').resolves(query);
      const product = await productModel.addNewProduct('newProduct');
        expect(product).to.be.equal(4);
    })
  })