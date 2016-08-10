import 'whatwg-fetch';
import _ from 'lodash';
import { push } from 'react-router-redux';

import { API_URL } from './index';
import {resetError} from './error';

import {
  ERROR,
  GET_GROUPS,
  GET_GROUP,
  CREATE_GROUP,
  UPDATE_GROUP,
  DELETE_GROUP
} from './constants';

export function createGroup(group) {
  const query = { "query":
    `mutation createNewGroup {
      group: createGroup (
        name: "${group.name}"
      )
      {
        id
        name
      }
    }`
  };

  return (dispatch) => fetch(`${API_URL}/data/`, {
    method: 'POST',
    body: JSON.stringify(query)
  })
  .then(response => response.json())
  .then(json => dispatch({
    type: CREATE_GROUP,
    payload: json
  }))
  .then(() => dispatch(push('/')))
  .catch(exception => dispatch({
    type: ERROR,
    payload: exception.message
  }));
}

export function getGroups() {
  const query = { "query":
    `{
      groups {
        name
      }
    }`
  };

  return (dispatch) => fetch(`${API_URL}/data/`, {
    method: 'POST',
    body: JSON.stringify(query)
  })
  .then(response => response.json())
  .then(json => dispatch({
    type: GET_GROUPS,
    payload: json
  }))
  .catch(exception => dispatch({
    type: ERROR,
    payload: exception.message
  }));
}

export function getGroup(name) {
  const query = { "query":
    `{
      group(name: "${name}")
      {
        id
        name
      }
    }`
  };

  return (dispatch) => fetch(`${API_URL}/data/`, {
    method: 'POST',
    body: JSON.stringify(query)
  })
  .then(response => response.json())
  .then(json => dispatch({
    type: GET_GROUP,
    payload: json
  }))
  .catch(exception => dispatch({
    type: ERROR,
    payload: exception.message
  }));
}

export function updateGroup(group) {
  const query = { "query":
    `mutation updateExistingGroup {
      group: updateGroup (
        name: "${group.name}"
      )
      {
        id,
        name
      }
    }`
  };

  return (dispatch) => fetch(`${API_URL}/data/`, {
    method: 'POST',
    body: JSON.stringify(query)
  })
  .then(response => response.json())
  .then(payload => dispatch({payload, type: UPDATE_GROUP}))
  .then(() => dispatch(push('/')))
  .catch(exception => dispatch({
    type: ERROR,
    payload: exception.message
  }));
}

export function deleteGroup(name) {
  const query = { "query":
    `mutation deleteExistingGroup {
      group: deleteGroup (
        token: "${name}"
      )
      {
        name
      }
    }`
  };

  return (dispatch) => fetch(`${API_URL}/data/`, {
    method: 'POST',
    body: JSON.stringify(query)
  })
  .then(response => response.json())
  .then(json => dispatch({
    type: DELETE_GROUP,
    payload: json
  }))
  .catch(exception => dispatch({
    type: ERROR,
    payload: exception.message
  }));
}
