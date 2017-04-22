import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../header'
import Repo from '../repo'

import './index.css';

class App extends Component {
  static propTypes = {
    repos: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    repos: []
  };

  render() {
    const { repos } = this.props;
    return (
      <div className="app">
        <Header />
        <main>
          {repos.map(repo => <Repo key={repo.repo} {...repo}/>)}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  issues: state.issues,
  repos: state.repos
});

export default connect(mapStateToProps)(App)
