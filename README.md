# LearnGraphqlStart
Testando as possibilidades de aplicabilidade o Graphql em aplicações
``` 
    firebase init
    
    npm install express 
                graphql 
                firebase 
                apollo-server-express
    
    NodeJs => Firebase-functions
```
- Criar um hello world function
- Testar a conexão com o servidor (index.js):   
 https://us-central1-borboleta-d013b.cloudfunctions.net/helloWorld

 Atualizando reagras do eslint
 `npm install --save-dev eslint eslint-config-google`

 
: Para utilizar variaveis de ambientes locais
    $ npm install dotenv
- No arquivo server (Mais alto nível)
    require('dotenv').config()

// Opção criar o schema atravez de GraphQLSchema ??????
// Buildschema é limitado (resolvers not in the field) Usar apenas para testes de conexão
