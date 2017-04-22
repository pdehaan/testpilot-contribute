import React, { Component, PropTypes } from 'react';
import load from 'tectonic';

import { IssueModel } from '../../models';

import './index.css';

class Repo extends Component {
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

  renderLoading() {
    return <p>Loading&hellip;</p>
  }

  renderNoIssues() {
    return <p>No issues</p>;
  }

  renderIssue(issue) {
    const { id, title } = issue;
    return <li key={id}>{title}</li>
  }

  renderIssues() {
    const { issues, status: { issues: { status } } } = this.props;
    if (status === 'PENDING') {
      return this.renderLoading();
    } else if (!issues.length) {
      return this.renderNoIssues();
    }
    return (
      <ol>
        {issues.map(issue => (this.renderIssue(issue)))}
      </ol>
    );
  }

  render() {
    const { description, name } = this.props;
    return (
      <section className="repo">
        <header>
          <h2><a href={this.getUrl()}>{name}</a></h2>
          <p>{description}</p>
        </header>
        {this.renderIssues()}
      </section>
    );
  }
}

export default load(props => ({
  issues: IssueModel.getList({ repo: props.repo }),
}))(Repo);
