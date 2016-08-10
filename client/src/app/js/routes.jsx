import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import UsersIndex from './components/users/index';
import UsersShow from './components/users/show';
import UsersEdit from './components/users/edit';
import UsersNew from './components/users/new';

import GroupsIndex from './components/groups/index';
import GroupsShow from './components/groups/show';
import GroupsEdit from './components/groups/edit';
import GroupsNew from './components/groups/new';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={UsersIndex} />
    <Route path="users" component={UsersIndex} />
    <Route path="users/:username/show" component={UsersShow} />
    <Route path="profile" component={UsersEdit} />
    <Route path="users/new" component={UsersNew} />
    <Route path="groups" component={GroupsIndex} />
    <Route path="groups/:name/show" component={GroupsShow} />
    <Route path="groups/new" component={GroupsNew} />
  </Route>
);
