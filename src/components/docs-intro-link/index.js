import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default class DocsIntroLink extends Component {
  static propTypes = {
    slug: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    const { slug, subtitle, title } = this.props;
    return (
      <li className={`docs-intro-link docs-intro-link--${slug}`}>
        <Link to={`/docs/${slug}/`}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Link>
      </li>
    );
  }
}
