const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/connection');

const salesModel = require('../../../src/models/sales.model');

describe('Testa sales.model', function () {
  this.beforeEach(sinon.restore)
  describe('testa addNewSale', function() {
    it('teste de sucesso', async function () {
      sinon.stub(connection, 'execute').resolves([{ productId: 2, quantity: 3 }]);

      const bodySale = { saleId: 1, productId: 2, quantity: 3}
      const sale = await salesModel.createNewSale(bodySale);
      expect(sale).to.have.all.keys('productId', 'quantity')
    })
  })
})