import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LabelList from '../label-list';
import './index.css';

export default class Issue extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.object)
  };

  static defaultProps = {
    labels: []
  };

  render() {
    const { html_url, labels, number, title } = this.props;
    return (
      <li className="issue">
        <span className="issue-number">#{number}</span>
        <h3><a href={html_url}>{title}</a></h3>
        <LabelList labels={labels} />
      </li>
    );
  }
}
