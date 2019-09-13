const functions = require('firebase-functions');
const {ApolloServer} = require('apollo-server-express');
const app = require('express')();
const {typeDefs, resolvers} = require('./schemaApollo');
require('dotenv').config();

const PORT = process.env.PORT || 5000
// Criar um servidor Apollo
const serverApollo = new ApolloServer({
  typeDefs,
  resolvers
});
// Aplicar ao servidor um middleware
serverApollo.applyMiddleware({app});
app.listen(PORT, () => {
  console.log(`Servidor Apollo pronto pra decolar PORT: ${PORT} ${serverApollo.graphqlPath}`)
});
exports.apollo = functions.https.onRequest(serverApollo);
