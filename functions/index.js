const functions = require('firebase-functions');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
// Opção criar o schema atravez de GraphQLSchema ??????
// Buildschema é limitado (resolvers not in the field) Usar apenas para testes de conexão
const schema2 = require('./schemaExpress');

const app = express();
const PORT = process.env.PORT || 4001 
// Criar schema e root em outro arquivo (aqui só pra testar) 
const schema = buildSchema(`
	type Query{
		hello: String
	}
`);

const root = { hello: () => 'hello express-graphql'}

app.use('/graphql', graphqlHTTP({
	schema: schema2,
	rootValue: root,
	graphiql: true,
}));

app.listen(PORT, () => {
	console.log(`Tó te ouvindo express-grapgql na PORTA: ${PORT}`)
});

exports.helloWorld = functions.https.onRequest(app);
