import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Repo from '../repo'

import './index.scss';

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
      <div>
        <h1>Good First Bugs</h1>
        {repos.map(repo => <Repo {...repo}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repos: state.repos
});

export default connect(mapStateToProps)(App)
