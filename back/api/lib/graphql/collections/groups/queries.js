'use strict';

const GraphQLList = require('graphql').GraphQLList;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLNonNull = require('graphql').GraphQLNonNull;

const GroupType = require('./type');
const validate = require('./validate');
const resolves = require('./resolves');

module.exports = {
  groups: {
    type: new GraphQLList(GroupType),
    description: 'List of groups',
    resolve: function(source, args) {
      return resolves.getAll();
    }
  },
  group: {
    type: GroupType,
    description: 'Get a Group by name',
    args: {
      name: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve: function(source, args) {
      return validate(args).then(() => resolves.get(args.name));
    }
  }
}