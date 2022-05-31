# Projeto Cadastro de Clientes

### Boas vindas ao Cadastro de Clientes

## Contexto

O projeto foi uma proposta de desafio técnico para desenvolver uma aplicação que ajudasse a empresa a criar uma tela para cadastro e outra para gerenciamento de clientes. Para isso, a proposta é fazer uma aplicação onde o usuário possa cadastrar um novo cliente, bem como editar, remover e consultar os cadastros realizados anteriormente e que se encontram na base de dados

## Como instalar

Copie a chave ssh do projeto:
~~~
git@github.com:felipedias1/crud-web.git
~~~
Abra um terminal no seu computador e utilize os comandos a baixo na ordem que são apresentados:

~~~
git clone git@github.com:felipedias1/crud-web.git
cd crud-web
npm install
~~~

A aplicação está utilizando um banco de dados simulado através do JsonServer, então para executar o backend, você executará o seguinte comando:

~~~
json-server --watch db.json
~~~

Agora que está tudo funcionando, é só rodar esse comando:
~~~
npm start
~~~

## Modo de desenvolvimento

Este projeto foi desenvolvido com foco em FrontEnd, utilizando o software "JSONServer" para realizar as requisições.

## Tecnologias

- React
- JavaScript

## Como utilizar?

- / - rota para a pagina de consulta dos clientes
- /customer - rota para cadastrar ou editar cliente
 
## Qual o próximo passo?

* Desenvolver testes unitários e de integração
* Implementar Cadastro de Profissionais da Empresa.
* Implementação de consumo de API's externas
* Desenvolver o BackEnd da aplicação.
