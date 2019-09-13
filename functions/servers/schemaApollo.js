const admin = require('./util/admin');

const typeDefs = [
  `type Query {
    hello: String
  }

  schema {
    query: Query
  }`
];

var resolvers = {
    Query: {
      hello(root) {
        return 'world';
      }
    }
  };

module.exports = {typeDefs, resolvers};