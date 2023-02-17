const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/connection');
const salesModel = require('../../../src/models/sales.model')
const saleServices = require('../../../src/services/sales.services')

const saleAllMock = require('../mockAllSales')

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

  describe('teste de updateSales', () => {
    it('testa se atualizado o sale', async () => {
      sinon.stub(salesModel, 'updateSales').resolves({ productId: 1, quantity: 5 });
    
      const sale = await saleServices.updateSales(2, [{ productId: 1, quantity: 10 }]);
      console.log(sale)
      expect(sale).to.be.an('object');
    })
  })
})

 describe('teste de deleteSales', function ()  {
    it('testa caso de sucesso', async function() {
      
      sinon.stub(salesModel, 'deleteSales').resolves({ id: 1 });
      
      const sale = await saleServices.deleteSales(1);
      
    })
  })