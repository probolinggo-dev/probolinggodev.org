const { gql } = require('apollo-server-express');
const types = require('./graphql/types');
const queries = require('./graphql/queries');
const queriesResolvers = require('./graphql/queriesResolvers');

const typeDefs = gql`
  ${types}
  type Query {
    ${queries}
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: { ...queriesResolvers },
};

module.exports = {
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
};
