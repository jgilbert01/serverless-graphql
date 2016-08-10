'use strict';

const GraphQLString = require('graphql').GraphQLString;
const GraphQLNonNull = require('graphql').GraphQLNonNull;

const GroupType = require('./type');
const validate = require('./validate');
const authorize = require('../../../auth').authorize;
const resolves = require('./resolves');

module.exports = {
  createGroup: {
    type: GroupType,
    description: 'Create Group',
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(source, args) {
      return validate(args).then(() => resolves.create(args));
    }
  },
  updateGroup: {
    type: GroupType,
    description: 'Update Group',
    args: {
      token: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(source, args) {
      return validate(args).then(() => authorize(args.token, ['UPDATE_GROUP'])).then((group) => resolves.update(group, args));
    }
  },
  deleteGroup: {
    type: GroupType,
    description: 'Delete Group',
    args: {
      token: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(source, args) {
      return validate(args).then(() => authorize(args.token, ['DELETE_GROUP'])).then((group) => resolves.remove(group));
    }
  }
}