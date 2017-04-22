import React, { Component, PropTypes } from 'react';
import load from 'tectonic';

import { IssueModel } from '../../models';
import IssueList from '../issue-list';

import './index.css';

export class UnconnectedRepo extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    issues: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    issues: []
  };

  getUrl() {
    const { repo } = this.props;
    return `https://github.com/${repo}`;
  }

  render() {
    const { description, issues, name, status: { issues: { status } } } = this.props;
    if (status !== 'SUCCESS' || !issues.length) {
      return null;
    }
    return (
      <section className="repo">
        <header>
          <h2><a href={this.getUrl()}>{name}</a></h2>
          <p>{description}</p>
        </header>
        <IssueList issues={issues} />
      </section>
    );
  }
}

export default load(props => ({
  issues: IssueModel.getList({ repo: props.repo }),
}))(UnconnectedRepo);
