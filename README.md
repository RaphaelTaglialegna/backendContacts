## API de Contatos
  

  <p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/RaphaelTaglialegna/backendContacts">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/RaphaelTaglialegna/backendContacts">
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/RaphaelTaglialegna/backendContacts">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/RaphaelTaglialegna/backendContacts">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/RaphaelTaglialegna/backendContacts">
</p>

### Sobre

Aplicação que lista, armazena, valida, modifica e exclui um usuário padronizado a partir de requisições em um banco de dados relacional.

### Desenvolvimento

- JavaScript.
- Node.js.
- ORM Sequelize.
- Testes de Integração com Mocha, Chai e Sinon.
- Banco de Dado Mysql.
- Containers Docker da Aplicação e banco de Dados.

### Instalação 

Para rodar esse projeto, existe duas formas: 

1 - Rodando localmente com o Mysql instalado previamente usando, scripts:  
``` 
npm install // para instalar as dependências

npm start // para inicializar a aplicação e criar e implementar o banco de dados.
```
2 - Rodando com o Docker Compose e utilizando, nele tanto a aplicação quanto o banco de dados estão containirizados.  
``` 
npm install // para instalar as dependências

npm run compose:up // para inicializar a aplicação e criar e implementar o banco de dados.

docker container ls // para verificar as portas usadas padrão 3001 do backend.
```
#### Instruções da aplicação. 

Rotas e requisições: 

- GET para `/contacts`, vai retornar todos os contatos.
- GET para `/contacts/:id`, vai retornar apenas um contato com um ID válido.
- POST para `/contacts`, para criar um usuário.
- PUT para `/contacts/:id`, para editar um contato com um ID válido.
- DELETE para `/contacts/:id`, para excluir um contato com um ID válido.

### Requisitos da Aplicação 

Cadastro de contato sequindo o seguinte modelo (* campos obrigatórios): 
  - Contato 
    - Nome*
    - Sobrenome*
    - CPF - único por contato
    - E-mail - único no banco, vários por contato.
    - Telefone* - vários por contato. 
### Requisitos dos Testes
Rode o `npm test` para ver os testes.

 **1- Acessando a rota `/contacts` requisição do tipo `GET` retorne todos os contatos cadastrados no banco seguindo o sequinte modelo:**
 ```
 [
    {
        "id": 1,
        "firstName": "Leonardo",
        "lastName": "Silva",
        "cpf": "00000000000",
        "emails": [
            {
                "email": "leandro@gmail.com"
            }
        ],
        "phones": [
            {
                "phone": "19912345678"
            }
        ]
    },
    {
      "id": 1;
       ...
    }
    ...
] 
 ```  
  - Será avalizado checado se o status recebido foi  de '200'.
  - Se e o array retornado é igual ao do banco de dados.

 **2- Acessando a rota `/contacts/:id` requisição do tipo `GET`  passando um id como parâmetro retorne um contacto correspondente aquele id:**
 ```
{
    "id": 2,
    "firstName": "José",
    "lastName": "Marinho",
    "cpf": "00000000001",
    "emails": [
        {
            "id": 2,
            "email": "jose@gmail.com"
        },
        {
            "id": 3,
            "email": "jojo@gmail.com"
        }
    ],
    "phones": [
        {
            "id": 2,
            "phone": "19912345622"
        },
        {
            "id": 3,
            "phone": "19912345672"
        }
    ]
}

 ```  
  - Será avalizado checado se o status recebido foi  de '200'.
  - Se e o objeto retornado é igual ao o esperado.
  - Se o id passado como parâmetro é igual ao do objeto retornado.

  **3 - Criando um novo contato através da rota `/contacts` fazendo requisição do tipo `POST` será testado as seguintes validações.**
 
 ```
 // Padrão da requisição para cadastro.
{        
  firstName: 'Robert', // Campo obrigatório
  lastName: 'Mattos', // Campo obrigatório
  cpf: '00000000536',
  emails: [{ email: 'mattos@gmail.com' }],
  phones: [{ phone: '19912345659' }], // Campo obrigatório ao menos 1
};
```

1 - Fazendo uma requisição sem o campo firstName.
- Será avalizado checado se o status recebido foi  de '400'.
- Espera um erro com a seguinte mensagem `'"firstName" is required'`.

2 - Fazendo uma requisição sem o campo lastName.
- Será avalizado checado se o status recebido foi  de '400'.
- Espera um erro com a seguinte mensagem `'"lastName" is required'`.

3 - Fazendo uma requisição sem o campo phone.
- Será avalizado checado se o status recebido foi  de '400'.
- Espera um erro com a seguinte mensagem `'"phones[0].phone" is required'`.

4 - Fazendo um cadastro do usuário válido. 
- Será avalizado checado se o status recebido foi  de '201'.
- Espera um retorno do usuário cadastrado e seu respectivo ID.
