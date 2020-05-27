
# Marketplace
Api de gerenciamento de um marketplace

## Recursos:  

### Usuários:
#### GET&nbsp;&nbsp;&nbsp; /usuarios&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Lista todos os usuários registrados_

##### Query params:
| param | Descrição |
|--|--|
| nome | Filtro pelo valor especificado utilizando o operador _LIKE_ |
| limit | Limita a quantidade de registros retornados |

##### Autenticação:
Autenticação por meio do token de acesso enviado como parâmetro `x-access-token` no header da requisição. 

##### Exemplo:
```
curl -H "Content-Type: application/json" -H "x-access-token: seu-token-de-acesso" --request GET http://localhost:3000/usuarios
```
##### Retorno:
Retorna a lista de usuários registrados de acordos com os query params informados.
```
[
	{
		"_id": "id",
		"nome": "nome-usuario1",
		"email": "email",
		"senha": "psw",
		"__v":0
	},
	{
		"_id": "id",
		"nome": "nome-usuario2",
		"email": "email", 
		"senha":"psw",
		"__v":0
	}
]
```
---
#### GET&nbsp;&nbsp;&nbsp; /usuarios/:id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Retorna um usuário específico_

##### Parâmetros:
| Parâmetro | Descrição |
|--|--|
| id | Id do usuário que se deseja recuperar |

##### Autenticação:
Autenticação por meio do token de acesso enviado como parâmetro `x-access-token` no header da requisição. 

##### Exemplo:
```
curl -H "Content-Type: application/json" -H "x-access-token: seu-token-de-acesso" --request GET http://localhost:3000/usuarios/id-do-usuário
```
##### Retorno:
Retorna os dados do usuário requisitado.
```
{
	"_id": "id",
	"nome": "Nome do Usuário",
	"email": "email@email.com",
	"senha":"psw",
	"__v":0
}
```
---
#### POST&nbsp;&nbsp;&nbsp; /usuarios&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Cria um usuário_

##### Modelagem:
| Atributo | Tipo | Descrição |
|--|--|--|
| nome* | String | Nome do usuário que será exibido
| email* | String | Identificador que será usado no momento do login |
| senha* | String | Senha de autenticação definida pelo usuário |
| endereco | String | Endereço do usuário |

##### Autenticação:
Sem autenticação;

##### Exemplo:
```
curl -H "Content-Type: application/json" --request POST --data '{"nome":"Nome do Usuário", "email":"email@email.com", "senha":"psw"}' http://localhost:3000/usuarios
```
##### Retorno:
Retorna o usuário criado.
```
{
	"_id": "id",
	"nome": "Nome do Usuário",
	"email": "email@email.com",
	"senha":"psw",
	"__v":0
}
```
---
#### POST&nbsp;&nbsp;&nbsp; /usuarios/logar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Efetua o login de um usuário_

##### Modelagem:
| Atributo | Tipo | Descrição |
|--|--|--|
| email* | String | Email do usuário |
| senha* | String | Senha do usuário |

##### Autenticação:
Sem autenticação;

##### Exemplo:
```
curl -H "Content-Type: application/json" --request POST --data '{"email":"email@email.com", "senha":"psw"}' http://localhost:3000/usuarios/logar
```
##### Retorno:
Retorna o token de acesso que possibilita o uso que recursos que requerem autenticação.
```
{
	"token": "seu-token-de-acesso"
}
```
---
#### PUT&nbsp;&nbsp;&nbsp; /usuarios/:id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Atualiza um usuário_

##### Parâmetros:
| Parâmetro | Descrição |
|--|--|
| id | Id do usuário que se deseja atualizar |


##### Modelagem:
| Atributo | Tipo | Descrição |
|--|--|--|
| nome* | String | Nome do usuário que será exibido
| email* | String | Identificador que será usado no momento do login |
| senha* | String | Senha de autenticação definida pelo usuário |
| endereco | String | Endereço do usuário |

##### Autenticação:
Autenticação por meio do token de acesso enviado como parâmetro `x-access-token` no header da requisição. 

##### Exemplo:
```
curl -H "Content-Type: application/json" -H "x-access-token: seu-token-de-acesso" --request PUT --data '{"nome":"Nome do Usuário", "email":"email@email.com", "senha":"psw"}' http://localhost:3000/usuarios/id-do-usuário
```
##### Retorno:
Retorna a versão anterior do usuário.
```
{
	"_id": "id",
	"nome": "Nome do Usuário Anterior",
	"email": "email@email.com",
	"senha":"psw",
	"__v":0
}
```
---
#### DELETE&nbsp;&nbsp;&nbsp; /usuarios/:id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Remove um usuário_

##### Parâmetros:
| Parâmetro | Descrição |
|--|--|
| id | Id do usuário que se deseja deletar |

##### Autenticação:
Autenticação por meio do token de acesso enviado como parâmetro `x-access-token` no header da requisição. 

##### Exemplo:
```
curl -H "Content-Type: application/json" -H "x-access-token: seu-token-de-acesso" --request DELETE http://localhost:3000/usuarios/id-do-usuário
```
##### Retorno:
Retorna o usuário removido.
```
{
	"_id": "id",
	"nome": "Nome do Usuário Removido",
	"email": "email@email.com",
	"senha":"psw",
	"__v":0
}
```
