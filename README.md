# DG Solutions Teste Técnico

Projeto Full-Stack desenvolvido para o teste técnico da DG Solutions

## Índice
- [DG Solutions Teste Técnico](#dg-solutions-teste-técnico)
	- [Índice](#índice)
	- [Rodando Projeto](#rodando-projeto)
	- [Rodando projeto com Docker (Recomendado)](#rodando-projeto-com-docker-recomendado)
	- [Rodando Testes](#rodando-testes)
		- [Frontend](#frontend)
		- [Backend](#backend)
	- [Stacks Utilizadas](#stacks-utilizadas)
		- [Frontend](#frontend-1)
		- [Backend](#backend-1)
		- [Conteinerização](#conteinerização)
		- [Testes](#testes)
## Rodando Projeto
Para rodar o projeto em sua máquina local siga os seguintes passos:
1. Abra seu terminal e clone o repositório
	* Use o comando: `git clone git@github.com:luispolippo/Teste-Tecnico-DG.git`
	* Entre na pasta do repositório que você acabou de clonar: `cd Teste-Tecnico-DG/`
2. Instale as dependências
	* Para instalar as dependências dos módulos de Frontend e de Backend use o comando: `npm run prepare:project`
3. Configure as variáveis de ambiente de *backend*
	* Entre no módulo de backend: `cd backend/`
	* Altere o nome do arquivo `.env.example` para `.env`
	* Caso queira você pode alterar o valor de alguma variável de ambiente, mas **não é necessário**.
	*  ⚠️ **Atenção:** Não é necessário alterar nada na váriavel `DATABASE_URL="mysql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}"`
4. Configure as variáveis de ambiente de *frontend*
	* Entre no módulo de frontend: `cd frontend/`(Caso esteja na pasta de backend use: `cd ../frontend/`)
	* Altere o nome do arquivo `.env.example` para `.env`
	* Caso queira você pode alterar o valor de alguma variável de ambiente, mas **não é necessário**.
5. Iniciando a aplicação
	* Dentro do diretório `Teste-Tecnico-DG` use, no terminal, o comando: `npm run start:backend` e aguarde a inicialização.
	* Agora em um novo terminal use o comando: `npm run start:frontend` e agaurde a inicialização.
6. Acesso ao projeto
	* No navegador acesse o endereço: `http://localhost:3000`
7. **Projeto rodando!**

## Rodando projeto com Docker (Recomendado)

Para rodar o projeto com docker em sua máquina local siga os seguintes passos:

⚠️ **Atenção:** Certifique-se que as portas 3000 e 3001 estão livres!

1. Abra seu terminal e clone o repositório
	* Use o comando: `git clone git@github.com:luispolippo/Teste-Tecnico-DG.git`
	* Entre na pasta do repositório que você acabou de clonar: `cd Teste-Tecnico-DG/`
2. Suba os containers
	* Use o comando `"npm run docker-compose:up`
	* ⚠️ **Atenção:** Esse processo pode levar algum tempo.
3. Acesse o projeto
	* No navegador acesso o endereço: `http://localhost:3000`
	* **Projeto Rodando!**
4. Derrubando os containers
	* Caso precise você pode derrubar os containers com o comando: `npm run docker-compose:down`.

## Rodando Testes

### Frontend
Para rodar os testes de *frontend* os passos abaixo:
1. Acesse o módulo de *frontend* com o comando: `cd frontend/`
2. Para rodar os testes use o comando: `npm test`
3. Pressione `a` para rodar todos os testes.
### Backend
Para rodar os testes de *backend* os passos abaixo:
1. Acesse o módulo de *backend* com o comando: `cd backend/`
2. Para rodar os testes use o comando: `npm test`

## Stacks Utilizadas
### Frontend
* [React.js](https://pt-br.reactjs.org/)
* [Tailwind](https://tailwindcss.com/)
* [Typescript](https://www.typescriptlang.org/)
### Backend
* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/pt-br/)
* [Prisma](https://www.prisma.io/)
### Conteinerização
* [Docker](https://www.docker.com/)
### Testes
* [Jest](https://jestjs.io/pt-BR/)
* [React Testing Library](https://testing-library.com/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)
* [Sinon](https://sinonjs.org/)