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
})