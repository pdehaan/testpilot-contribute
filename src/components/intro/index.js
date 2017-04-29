import React, { Component } from 'react';

import Button from '../button';

import './index.css';

export default class Intro extends Component {
  render() {
    return (
      <section className="intro">
        <header>
          <h2>Contribute to Test Pilot</h2>
        </header>
        <p>Just by using Test Pilot, you're helping steer the future of Firefox. Interested in further contributing? Everything we do is open-source, and we&apos;d love your help.</p>
        <ul>
          <li><a href="">What is open source?</a></li>
          <li><a href="">Why would I contribute?</a></li>
          <li><a href="">How do I get started?</a></li>
        </ul>
        <Button text="Find an Issue" to="/browse" />
      </section>
    );
  }
}
