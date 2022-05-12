## API de Contatos
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
...

### Requisitos da Aplicação 

Cadastro de contato sequindo o seguinte modelo (* campos obrigatórios): 
  - Contato 
    - Nome*
    - Sobrenome*
    - CPF - único por contato
    - E-mail - único no banco, vários por contato.
    - Telefone* - vários por contato. 
### Requisitos dos Testes
 **1- Acessando a rota `/contact` retorne todos os usuários cadastrados no banco seguindo o sequinte modelo:**
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
