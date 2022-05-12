/* eslint-disable mocha/no-mocha-arrows */
const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../src/app');

const DATABASECONTACT = require('./Mocks/databaseMock');
const { Contact } = require('../src/models');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a API Contact', () => {
  let chaiHttpResponse;
  describe('1- Acessando a rota `/contact` requisição do tipo'
   + '`GET` retorne todos os usuários cadastrados no banco.', () => {
    before(async () => {
      sinon
        .stub(Contact, 'findAll')
        .resolves(DATABASECONTACT);
    });
    
    after(() => {
      (Contact.findAll).restore();
    });
    
    it('Espera no corpo da resposta STATUS 200', async () => {
      chaiHttpResponse = await chai.request(app).get('/contacts');
      expect(chaiHttpResponse.status).to.be.equal(200);
    });
    
    it('Espera que tenha o campo firstName, lastName e cpf', () => {
      expect(chaiHttpResponse.body[0]).to.have.own.property('firstName');
      expect(chaiHttpResponse.body[0]).to.have.own.property('lastName');
      expect(chaiHttpResponse.body[0]).to.have.own.property('cpf');
    });
    it('Espera que tenha o campo phones e que seja um array com uma propriedade phone.', () => {
      expect(chaiHttpResponse.body[0]).to.have.own.property('phones').to.be.an('array');
      expect(chaiHttpResponse.body[0].phones[0]).to.have.own.property('phone');
    });  
    it('Espera que tenha o campo emails e que seja um array com uma propriedade email.', () => {
      expect(chaiHttpResponse.body[0]).to.have.own.property('emails').to.be.an('array');
      expect(chaiHttpResponse.body[0].emails[0]).to.have.own.property('email');
    });    
  });

  describe('2- Acessando a rota `/contact` requisição do tipo'
  + '`GET` retorne todos os usuários cadastrados no banco.', () => {
   before(async () => {
     sinon
       .stub(Contact, 'findAll')
       .resolves(DATABASECONTACT);
   });
   
   after(() => {
     (Contact.findAll).restore();
   });
   
   it('Espera no corpo da resposta STATUS 200', async () => {
     chaiHttpResponse = await chai.request(app).get('/contacts');
     expect(chaiHttpResponse.status).to.be.equal(200);
   });
   
   it('Espera que tenha o campo firstName, lastName e cpf', () => {
     expect(chaiHttpResponse.body[0]).to.have.own.property('firstName');
     expect(chaiHttpResponse.body[0]).to.have.own.property('lastName');
     expect(chaiHttpResponse.body[0]).to.have.own.property('cpf');
   });
   it('Espera que tenha o campo phones e que seja um array com uma propriedade phone.', () => {
     expect(chaiHttpResponse.body[0]).to.have.own.property('phones').to.be.an('array');
     expect(chaiHttpResponse.body[0].phones[0]).to.have.own.property('phone');
   });  
   it('Espera que tenha o campo emails e que seja um array com uma propriedade email.', () => {
     expect(chaiHttpResponse.body[0]).to.have.own.property('emails').to.be.an('array');
     expect(chaiHttpResponse.body[0].emails[0]).to.have.own.property('email');
   });    
 });
});
