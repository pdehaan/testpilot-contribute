import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Footer from '../../components/footer';
import Header, { HomeNav } from '../../components/header';
import { docs } from '../../config.json';
import Home from '../home';
import Tasks from '../tasks';

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

  getNav(pathname) {
    console.log('Getting nav for', pathname)
    const navMap = {
      '/': HomeNav
    };
    return navMap.hasOwnProperty(pathname) ? navMap[pathname] : null;
  }

  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/tasks/" component={Tasks} />
          {this.renderDocsRoutes()}
          <Footer />
        </div>
      </ConnectedRouter>
    );
  }
}
