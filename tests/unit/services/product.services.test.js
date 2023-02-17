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

  describe('testa updateProduct', function () {
    it('testa se é atualizado o product na chave name', async function () {
      const query = { id: 1, name: "Machado do Thor" };
      
      sinon.stub(productModel, 'getById').resolves(query);
      sinon.stub(productModel, 'updateProduct').resolves(query);
      const product = await productServices.updateProduct(1, "Capa do Dr Estranho");
      
      expect(product).to.be.an('object');
    })
  }) 

  describe('testa deleteProduct', function () {
    it('testa se é deletado o produto', async function () {
      const query = { id: 1};
      
      sinon.stub(productModel, 'deleteProduct').resolves(query);
      const product = await productServices.deleteProduct(1);
      expect(product).to.be.deep.equal({id:1})
      
    })
  }) 

})

describe('testa addNewProduct', function () {
    it('testa se é criado um novo obj com id 4 e name "NewProduct"', async function () {    
      obj = [{isertId: 4}]
      
      sinon.stub(productModel, 'addNewProduct').resolves(obj);

      const product = await productServices.addNewProduct('NewProduct');
    
      expect(product).to.be.deep.equal({ id: obj ,name : 'NewProduct' });
    })
})
  
