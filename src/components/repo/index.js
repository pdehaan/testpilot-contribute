import React, { Component, PropTypes } from 'react';
import load from 'tectonic';

import { IssueModel } from '../../models';
import IssueList from '../issue-list';
import RepoHeader from '../repo-header';

import './index.css';

export class UnconnectedRepo extends Component {
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
    const { issues, status: { issues: { status } } } = this.props;
    if (status !== 'SUCCESS' || !issues.length) {
      return null;
    }
    return (
      <section className="repo">
        <RepoHeader url={this.getUrl()} {...this.props}/>
        <IssueList issues={issues} />
      </section>
    );
  }
}

export default load(props => ({
  issues: IssueModel.getList({ repo: props.repo }),
}))(UnconnectedRepo);
