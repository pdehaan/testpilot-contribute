import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Header from '../../components/header';
import { docs } from '../../config.json';
import Home from '../home';

import './index.css';

export default class App extends Component {
  static propTypes = {
    repos: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    repos: []
  };

  renderDocsRoutes() {
    return (
      <Route
        path="/docs"
        render={() => (
          <div>
            {docs.map(doc => {
              const Component = require(`../docs-page/content/${doc.slug}`)
                .default;
              const path = `/docs/${doc.slug}/`;
              return <Route exact path={path} component={Component} />;
            })}
          </div>
        )}
      />
    );
  }

  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <div className="app">
          <Header />
          <main>
            <Route exact path="/" component={Home} />
            {this.renderDocsRoutes()}
          </main>
        </div>
      </ConnectedRouter>
    );
  }
}
