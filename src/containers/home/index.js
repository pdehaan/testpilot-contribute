import React, { Component } from 'react';

import DocsIntro from '../../components/docs-intro';
import Intro from '../../components/intro';

import './index.css';

export default class Home extends Component {
  render() {
    return (
      <section>
        <Intro />
        <DocsIntro />
      </section>
    );
  }
}
