const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../src/models/connection')
const productModel = require('../../../src/models/product.model');

const mockAllProducts = require('../mockAllProducts');
const { id } = require('../../../src/middlewares/productSchema');
const { func } = require('joi');

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
  describe('testa addNewProduct', function () {
    it('testa se é criado um produto com o id 4', async function () {
      const query = [{insertId: 4}];
        sinon.stub(connection, 'query').resolves(query);
      const product = await productModel.addNewProduct('newProduct');
        expect(product).to.be.equal(4);
    })
})
  
describe('testa updateProduct', function () {
    it('testa se é atualizado a chave name', async function () {
      const query = [{ id: 1, name: 'Martelo do Thor' }];

      sinon.stub(connection, 'query').resolves(query)

      const product = await productModel.updateProduct(1, 'Capa do Dr Estranho');
      expect(product).to.be.deep.equal(
        { name: 'Capa do Dr Estranho', id: 1 }
      )
    })
  })
  describe('testa deletedProduct', function () {
    it('testa se é deletado o produto com id 1', async function () {
      const query = [{ id: 1 }];
      sinon.stub(connection, 'query').resolves(query);

      const product = await productModel.deleteProduct(1)
      expect(product).to.be.deep.equal({id: 1})
    })
  })
})
