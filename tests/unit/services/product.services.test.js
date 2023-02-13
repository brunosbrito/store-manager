const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../src/models/connection')
const productModel = require('../../../src/models/product.model');
const productServices = require('../../../src/services/product.services')
const mockAllProducts = require('../mockAllProducts')

describe('Testa Products Sertvices', function () {
  beforeEach(sinon.restore);
  describe('testa getAll', function () {
    it('testa se retorna todos os produtos', async function () {
      sinon.stub(productModel, 'getAll').resolves([mockAllProducts]);

      const product = await productServices.getAll();
      expect(product).to.be.deep.equal(product);
    })
  })
  describe('testa getById', function () {
    it('testa se retorna um produto pelo id', async function () {    
      
      objProduct = { "id": 1, "name": "Martelo de Thor" }
      
      sinon.stub(productModel, 'getById').resolves(objProduct);

      const product = await productServices.getById(1);
     expect(product).to.be.all.keys('id','name');
    })
  })
})