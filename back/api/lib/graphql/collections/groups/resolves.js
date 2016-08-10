'use strict';

const Promise = require('bluebird');
const uuid = require('uuid');
const bcryptjs = require('bcryptjs');
const db = require('../../../dynamodb');
const authenticate = require('../../../auth').authenticate;
const invoke = require('../../../invoke')
const _ = require('lodash');

const stage = process.env.SERVERLESS_STAGE;
const projectName = process.env.SERVERLESS_PROJECT;
const groupsTable = projectName + '-groups-' + stage;

module.exports = {
  create(group) {
    group.id = uuid.v1();
    group.permissions = ['UPDATE_GROUP', 'DELETE_GROUP'];

    return db('put', {
      TableName: groupsTable,
      Item: group
    })
    // finally return the user record
    .then(() => group);
  },

  get(name) {
    return db('get', {
      TableName: groupsTable,
      Key: {name},
      AttributesToGet: [
        'id',
        'name'
      ]
    }).then(reply => reply.Item);
  },

  getAll() {
    return db('scan', {
      TableName: groupsTable,
      AttributesToGet: [
        'id',
        'name'
      ]
    }).then(reply => reply.Items);
  },

  update(group, obj) {

    // update data
    group.name = obj.name || group.name;

    return db('put', {
      TableName: groupsTable,
      Item: group
    }).then(() => _.merge({}, group, obj));
  },

  remove(user) {
    return db('delete', {
      TableName: groupsTable,
      Key: { name: user.name }
    });
  }
};