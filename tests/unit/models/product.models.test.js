const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/connection')
const productModel = require('../../../src/models/product.model');

const mockAllProducts = require('../mockAllProducts')

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