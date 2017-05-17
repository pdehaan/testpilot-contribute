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

  renderRepo() {
    const { html_url, number, repo } = this.props;
    if (repo) {
      return (
        <div className="issue--repo">
          <a href={`https://github.com/${repo.repo}`}>{repo.name}</a>
          <a href={html_url}>#{number}</a>
        </div>
      );
    }
    return null;
  }

  renderAssignee() {
    const { assignee } = this.props;
    if (assignee) {
      return (
        <p className="assignee">
          Assigned to <a href={assignee.html_url}>{assignee.login}</a>
        </p>
      );
    }
    return null;
  }

  render() {
    const { url, labels, title } = this.props;
    return (
      <li className="issue">
        {this.renderRepo()}
        <h3><a href={url}>{title}</a></h3>
        <LabelList labels={labels} />
        {this.renderAssignee()}
      </li>
    );
  }
}
