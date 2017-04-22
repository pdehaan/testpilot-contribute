import React, { Component, PropTypes } from 'react';

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
        <h2><a href={html_url}>{title} (#{number})</a></h2>
        <LabelList labels={labels} />
      </li>
    );
  }
}
