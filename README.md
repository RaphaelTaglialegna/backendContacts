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
 **1- Acessando a rota `/contact` requisição do tipo `GET` retorne todos os contatos cadastrados no banco seguindo o sequinte modelo:**
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

 **2- Acessando a rota `/contact/:id` requisição do tipo `GET`  passando um id como parâmetro retorne um contacto correspondente aquele id:**
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