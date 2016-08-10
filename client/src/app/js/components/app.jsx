import React from 'react';
import { Component } from 'react';

import Error from './shared/error';
import Header from './shared/header';
import { Navigation } from './shared/navigation';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Navigation />
        <Error />
        {this.props.children}
      </div>
    );
  }
}
