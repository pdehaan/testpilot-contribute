import React, { Component } from 'react';

import './index.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>
          <a href="https://testpilot.firefox.com/">Firefox Test Pilot</a>
        </h1>
      </header>
    );
  }
}
