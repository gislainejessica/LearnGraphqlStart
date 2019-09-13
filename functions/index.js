const functions = require('firebase-functions');
const app = require('express')();
const graphqlHTTP = require('express-graphql');
const schema = require('./schemaExpress');
const PORT = process.env.PORT || 5000 
require('dotenv').config()

app.use('/graphql', graphqlHTTP({
	schema: schema,
	graphiql: true,
}));
app.listen(PORT, () => {
	console.log(`Tó te ouvindo express-grapgql na PORTA: ${PORT}`)
});
exports.graphqlbase = functions.https.onRequest(app);
