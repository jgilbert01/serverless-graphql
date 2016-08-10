import React from 'react';
import { IndexLink, Link } from 'react-router';

export const Navigation = () => (
  <ul>
    <li><Link to="/users" activeClassName="active">Users</Link></li>
    <li><Link to="/groups" activeClassName="active">Groups</Link></li>
  </ul>
)