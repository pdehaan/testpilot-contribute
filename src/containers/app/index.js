import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux';

import Header from '../../components/header'

import {
  GetStarted,
  NeedToKnow,
  WhatIsOpenSource,
  WhyContribute
} from '../docs-page';
import Home from '../home';

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
            <Route path="/docs/what-is-open-source/" component={WhatIsOpenSource} />
            <Route path="/docs/why-contribute/" component={WhyContribute} />
            <Route path="/docs/need-to-know/" component={NeedToKnow} />
            <Route path="/docs/get-started/" component={GetStarted} />
          </main>
        </div>
      </ConnectedRouter>
    );
  }
}
