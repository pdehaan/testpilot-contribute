import React, { Component } from 'react';

import Button from '../button';

import './index.css';

export default class Intro extends Component {
  render() {
    return (
      <section className="intro">
        <div className="copter" />
        <header>
          <h2>Contribute to Test Pilot</h2>
        </header>
        <p>
          Just by using Test Pilot, you're helping steer the future of Firefox. Interested in further contributing? Everything we do is open-source, and we'd love your help.
        </p>
        <Button text="Find a Task" to="/tasks/" />
      </section>
    );
  }
}
