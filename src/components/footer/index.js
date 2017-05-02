import React, { Component } from 'react';

import './index.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <nav>
          <ul>
            <li className="footer--mozilla"><a href="">Mozilla</a></li>
            <li><a href="">Legal</a></li>
            <li><a href="">About Test Pilot</a></li>
            <li><a href="">Privacy</a></li>
            <li><a href="">Terms</a></li>
            <li><a href="">Cookies</a></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li className="footer--github"><a href="">GitHub</a></li>
            <li className="footer--twitter"><a href="">Twitter</a></li>
          </ul>
        </nav>
      </footer>
    );
  }
}
