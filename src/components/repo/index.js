import React, { Component, PropTypes } from 'react';

import styles from './index.css';

export default class Repo extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    issues: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    issues: []
  };

  getUrl() {
    const { url } = this.props;
    return `https://github.com/${url}`;
  }

  renderNoIssues() {
    return <p>No issues</p>;
  }

  renderIssue(issue) {
    const { title } = issue;
    return <li>{title}</li>
  }

  renderIssues() {
    const { issues } = this.props;
    if (!issues.length) {
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
