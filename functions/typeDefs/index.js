//const root = require('./root');
//const usuario = require('./usuario');

//const typeDef = [root, usuario];
const { gql } = require('apollo-server-express')

const Greeting = gql`
  type Greeting {
    name: String
    age: Int
    profession: String
    text: String
  }
`

const Query = gql`
  type Query {
    greeting(name: String): Greeting
    
  }
  type Mutation{
    usuario(user: String): Greeting
  }
  
`


module.exports = [Greeting, Query]


//const typeDef = root;

//module.exports = {typeDef};
 