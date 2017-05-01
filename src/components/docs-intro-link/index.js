import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default class DocsIntroLink extends Component {
  static propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    const { slug, title } = this.props;
    return (
      <li className={`docs-intro-link docs-intro-link--${slug}`}>
        <Link to={`/docs/${slug}/`}>{title}</Link>
      </li>
    );
  }
}
