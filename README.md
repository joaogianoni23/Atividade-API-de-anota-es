# Passo a Passo

Primeiramente usei o template do docente Felipe (node-back-banco), após isso instalei no terminal o comando "npm install prisma @prisma/client npx prisma init", depois instalei "npx prisma migrate dev --name init", após isso fui trocando o arquivo de configuração do banco de dados para o que está no template do docente Felipe, e depois eu criei o arquivo de rotas no meu controller, depois eu criei o model e o controller, e finalmente eu criei a rota que recebe as requisições e chama o controller.

# Como usar

Para rodar o projeto, basta rodar o comando "npm run dev" e depois acessar a url "http://localhost:4000/notas".

Depois disso, Usei o Postman para fazer as requisições. Para criar uma nota, use o método POST e envie um JSON no corpo da requisição com os campos "titulo", "descricao" e "data". Para listar as notas, use o método GET. Para atualizar uma nota, use o método PUT e envie um JSON no corpo da requisição com os campos "titulo", "descricao" e "data". Para deletar uma nota, use o método DELETE e envie o ID da nota que deseja deletar.