/* eslint-disable mocha/no-mocha-arrows */
const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../src/app');

const DATABASECONTACT = require('./Mocks/databaseMock');
const CONTACTRESPONSE = require('./Mocks/contactByIdMock');

const { Contact } = require('../src/models');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando a API Contact', () => {
  let chaiHttpResponse;
  describe('1- Acessando a rota `/contacts` requisição do tipo'
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

  describe('2- Acessando a rota `/contacts/:id` requisição do tipo `GET`  passando um id como parâmetro retorne um contacto correspondente aquele id.', () => {
   before(async () => {
     sinon
       .stub(Contact, 'findByPk')
       .resolves(DATABASECONTACT);
   });
   
   after(() => {
     (Contact.findByPk).restore();
   });
   
   it('Espera no corpo da resposta STATUS 200', async () => {
     chaiHttpResponse = await chai.request(app).get('/contacts/2');
     expect(chaiHttpResponse.status).to.be.equal(200);
   });
   
   it('Espera que tenha o campo firstName, lastName e cpf', () => {
     expect(chaiHttpResponse.body).to.have.own.property('firstName');
     expect(chaiHttpResponse.body).to.have.own.property('lastName');
     expect(chaiHttpResponse.body).to.have.own.property('cpf');
   });
   it('Espera que tenha o campo phones e que seja um array com uma propriedade phone.', () => {
     expect(chaiHttpResponse.body).to.have.own.property('phones').to.be.an('array');
     expect(chaiHttpResponse.body.phones[0]).to.have.own.property('phone');
   });  
   it('Espera que tenha o campo emails e que seja um array com uma propriedade email.', () => {
     expect(chaiHttpResponse.body).to.have.own.property('emails').to.be.an('array');
     expect(chaiHttpResponse.body.emails[0]).to.have.own.property('email');
   }); 
   it('Espera que o objeto retornado seja o mesmo ao esperado.', () => {
    expect(chaiHttpResponse.body).to.be.an('object').deep.equal(CONTACTRESPONSE);
  });     
 });
  describe('3 - Criando um novo contato através da rota `/contacts` fazendo requisição do tipo `POST` será testado as seguintes validações.', () => {
    before(async () => {
      sinon
        .stub(Contact, 'create')
        .resolves(DATABASECONTACT);
    });
    
    after(() => {
      (Contact.create).restore();
    });

    describe('Fazendo a requisição sem o campo firstName', () => {
        it('Espera no corpo da resposta STATUS 400', async () => {
        chaiHttpResponse = await chai.request(app).post('/contacts').send({        
          lastName: 'Mattos',
          cpf: '00000000536',
          emails: [{ email: 'mattos@gmail.com' }],
          phones: [{ phone: '19912345659' }],
      });
        expect(chaiHttpResponse.status).to.be.equal(400);
      });
      it('Espera um erro com a seguinte mensagem "\"firstName\" is required".', () => {
        expect(chaiHttpResponse.body).to.haveOwnProperty('message').to.be.eq('"firstName" is required');
      });    
    });
  });
});
