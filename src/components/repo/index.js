import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { IssueModel } from '../../models';
import IssueList from '../issue-list';
import RepoHeader from '../repo-header';

import './index.css';

export default class Repo extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    issues: PropTypes.arrayOf(PropTypes.object),
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    thumbnail: PropTypes.string.isRequired
  };

  static defaultProps = {
    issues: []
  };

  getUrl() {
    const { repo } = this.props;
    return `https://github.com/${repo}`;
  }

  render() {
    return (
      <section className="repo">
        <RepoHeader url={this.getUrl()} {...this.props}/>
        <IssueList issues={issues} />
      </section>
    );
  }
}
