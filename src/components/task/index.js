import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LabelList from '../label-list';
import './index.css';

export default class Task extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.object),
    assignee: PropTypes.object.isRequired,
    repo: PropTypes.object
  };

  static defaultProps = {
    labels: [],
    assignee: null,
    repo: null
  };

  renderAssignee() {
    const { assignee } = this.props;
    if (assignee) {
      return (
        <div className="issue--assignee">
          Assigned to <a href={assignee.html_url}>{assignee.login}</a>
        </div>
      );
    }
    return null;
  }

  render() {
    const { url, repo, skills, title } = this.props;
    return (
      <li className="task">
        <a href={url} target="_blank">
          <h3>{title}</h3>
          {this.renderAssignee()}
          <LabelList labels={skills} repo={repo} />
        </a>
      </li>
    );
  }
}
