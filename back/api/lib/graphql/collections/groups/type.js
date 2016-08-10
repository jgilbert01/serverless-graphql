'use strict';

const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLString = require('graphql').GraphQLString;

module.exports = new GraphQLObjectType({
  name: 'Group',
  description: 'Group',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString}
  })
});
