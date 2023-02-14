const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/sales.model')
const salesServices = require('../../../src/services/sales.services')
const saleController = require('../../../src/controllers/sales.controller')
const mockAllSales = require('../mockAllSales')

describe('testa sales Controller', function () {
  this.beforeEach(sinon.restore);
  describe('testa addNewsale', function () {
    it('testa se tem as keys id e itemsSold', async function () {

      const { id, itemsSold } = mockAllSales;
       const saleObj = { id, itemsSold };
      sinon.stub(salesServices, 'addNewSale').resolves(saleObj);

      const req = {};
      const res = {};
      req.body = [
      {
        "productId": 1,
        "quantity":1
      },
      {
        "productId": 2,
        "quantity":5
      }
      ]

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);

      await saleController.addNewSale(req, res);
      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledWith(saleObj)).to.be.true;
    })
  })
})