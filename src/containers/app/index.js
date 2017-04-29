import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux';

import Header from '../../components/header'
import Home from '../home';

console.log(Route);

import './index.css';

export default class App extends Component {
  static propTypes = {
    repos: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    repos: []
  };

  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <div className="app">
          <Header />
          <main>
            <Route exact path="/" component={Home} />
          </main>
        </div>
      </ConnectedRouter>
    );
  }
}
