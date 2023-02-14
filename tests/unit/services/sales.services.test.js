const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/sales.model')
const saleServices = require('../../../src/services/sales.services')

describe('testa sales.services', function () {
  this.beforeEach(sinon.restore);
  describe('testa addNewsale', function () {
    it('testa se tem as keys id e itemsSold', async function () {
      sinon.stub(salesModel, 'addNewSale').resolves([{ id: 10 }]);
      sinon.stub(salesModel, 'createNewSale').resolves([{ productId: 5, quantity: 11 }]);

      saleObj = [{
        id: 10,
        productId: 5,
        quantity: 11,
      }];

      const sale = await saleServices.addNewSale(saleObj)
      expect(sale).to.have.all.keys('id', 'itemsSold')
    })
  })
})