const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/connection');

const salesModel = require('../../../src/models/sales.model');

describe('Testa sales.model', function () {
  this.beforeEach(sinon.restore)
  
  describe('testa updateSales', function() {
    it('teste de sucesso', async function () {
      const query = [{productId: 1, quantity: 10}]
      sinon.stub(connection, 'query').resolves(query);

      const sale = await salesModel.updateSales({ saleId: 1, productId: 3, quantity: 5 })
      expect(sale).to.be.not.empty;
    })
  })
  describe('testa deleteSales', function() {
    it('teste de sucesso', async function () {
      const query = [{id: 1}]
      sinon.stub(connection, 'query').resolves(query);

      const sale = await salesModel.deleteSales(1)
      expect(sale).to.be.deep.equal({id: 1})
    })
  })
})


describe('testa addNewSale', function() {
    it('teste de sucesso', async function () {
      sinon.stub(connection, 'execute').resolves([{ productId: 2, quantity: 3 }]);

      const bodySale = { saleId: 1, productId: 2, quantity: 3}
      const sale = await salesModel.createNewSale(bodySale);
      expect(sale).to.have.all.keys('productId', 'quantity')
    })
  })

