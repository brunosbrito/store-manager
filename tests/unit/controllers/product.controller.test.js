const sinon = require('sinon')
const { expect } = require('chai')

const productController = require('../../../src/controllers/product.controller')
const productServices = require('../../../src/services/product.services')

const mockAllProducts = require('../mockAllProducts')
const { func } = require('joi')

describe('testa productControllers', function () {
  beforeEach(sinon.restore);
  describe('testa getAll', function () {
    it('caso de sucesso', async function () {
      sinon.stub(productServices, 'getAll').resolves(mockAllProducts);

      const req = {}
      const res = {}

      res.status = sinon.stub().returns(res)
      res.json = sinon.stub().returns(res)

      await productController.getAll(req, res);
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(mockAllProducts)).to.be.true;
    })
  })

  describe('testa getById', function () {
    it('caso de sucesso pelo id 1', async function () {
       const productObj = { "id": 1, "name": "Matelo de thor"}
      sinon.stub(productServices, 'getById').resolves(productObj);

      const req = {};
      const res = {};

      req.params = { id: 1 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      await productController.getById(req, res);
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(productObj)).to.be.true;

    })
  })
  describe('testa addNewProduct', function () {
    it('caso de sucesso se criar o produto', async function () {
       const productObj = { name: 'NewProduct'}
      sinon.stub(productServices, 'addNewProduct').resolves(productObj);

      const req = {};
      const res = {};

      req.body = {name: 'NewProduct'};
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      console.log(req)
      await productController.addNewProduct(req, res);
      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledWith(productObj)).to.be.ok;

    })
  })

})

describe('testa deleteProduct', function () {
    it('caso de sucesso de deletar o produto', async function () {
    const productObj = { id: 1, name: 'produtoZ' };
      sinon.stub(productServices, 'updateProduct').resolves(productObj);

      const req = {};
      const res = {};

      req.params = { id: 1 };
      req.body = { name: 'ProdutoZ' }
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      await productController.updateProduct(req, res);
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(productObj)).to.be.true;
      
    })
  })
