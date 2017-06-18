import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>
          <Link to="/">Firefox Test Pilot</Link>
        </h1>
      </header>
    );
  }
}
