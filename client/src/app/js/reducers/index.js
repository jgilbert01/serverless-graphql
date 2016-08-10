import { combineReducers } from 'redux';
import {routerReducer } from 'react-router-redux'

import UsersReducer from './users';
import GroupsReducer from './groups';
import ErrorReducer from './error';

export default combineReducers({
  users: UsersReducer,
  groups: GroupsReducer,
  error: ErrorReducer,
  routing: routerReducer
});

