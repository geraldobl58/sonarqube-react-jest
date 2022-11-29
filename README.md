# Local

Faça o clone do projeto e execute o comando:
`npm install`

Antes de executá-lo, precisamos aumentar a memória dedicada ao Docker:
`sudo sysctl -w vm.max_map_count=262144`

Dentro do mesmo diretório onde o arquivo está localizado execute(Obs: O terminal ficará bloqueado):
`docker-compose up`
http://localhost:9000/


Clique em Login e entre com as seguintes credenciais:
Login: admin
Senha: admin


# Comandos:

Para executar o Jest em todo o projeto no modo de observação:
`npm run test`

Para executar o Jest em todo o projeto sem o modo de observação:
`npm run test:noWatch`

Para executar o Jest em todo o projeto sem o modo de observação e gerar um relatório:
`npm run test:report`

Para executar o ESLint em todo o projeto
`npm run lint -- .`

Para executar o ESLint em todo o projeto e gerar um relatório:
`npm run lint:report -- .`

Para executar o SonarQube Scanner
`npm run sonar`