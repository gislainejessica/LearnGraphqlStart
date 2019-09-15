const {gql} = require('apollo-server-express');

const usuario = gql`
    type: Usuario{
        id: String! 
        nome: String
    }
    extend type Query{
        usuarios: [usuario]!
    }
    extend type Mutation{
        registrar(nome:String id: String!):Usuario!
    }
`;
module.exports = {usuario};