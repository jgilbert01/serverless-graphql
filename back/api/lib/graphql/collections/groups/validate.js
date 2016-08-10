'use strict';

const Promise = require('bluebird');

let validate = {
  name: (name) => {
    return;
  },
  token: (token) => {
    return;
  }
};


module.exports = (data) => {
  Object.keys(data).forEach((d) => {validate[d](data[d])});
  return Promise.resolve();
}
