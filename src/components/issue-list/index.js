import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Issue from '../issue';
import './index.css';

export default class IssueList extends Component {
  static propTypes = {
    issues: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    issues: []
  };

  renderIssue(issue) {
    return <Issue key={issue.id} {...issue.values()} />
  }

  render() {
    const { issues } = this.props;
    if (issues.length) {
      return (
        <ol className="issue-list">
          {issues.map(issue => (this.renderIssue(issue)))}
        </ol>
      );
    }
    return null;
  }
}
