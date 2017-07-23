import React, { Component } from 'react';

import { docs } from '../../config';
import DocsIntroLink from '../docs-intro-link';

import './index.css';

export default class DocsIntro extends Component {
  renderList() {
    return (
      <ul>
        {docs.map((doc, idx) => <DocsIntroLink key={idx} {...doc} />)}
      </ul>
    );
  }

  render() {
    return (
      <section id="docs-intro" className="docs-intro">
        <header>
          <h2>Getting Started</h2>
        </header>
        {this.renderList()}
      </section>
    );
  }
}
