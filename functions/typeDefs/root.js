const {gql} = require('apollo-server-express');

const root = gql`
    type: Query
    type: Mutation
`;
module.exports = {root};