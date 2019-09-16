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
input TypeInput {
    name: String
    age: Int
    profession: String
    text: String
  }
 
  type Mutation{
    usuario(user: String): Greeting
    usuarios(input:TypeInput):Greeting
  } 
  type Query {
    greeting(name: String): Greeting
    
  }
  
`


module.exports = [Greeting, Query]


//const typeDef = root;

//module.exports = {typeDef};
 