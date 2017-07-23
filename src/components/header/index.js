import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import URI from 'urijs';

import { scrollTo } from '../../util';

import './index.css';

export class NavItem extends Component {
  static propTypes = {
    target: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  };

  handleClick(evt) {
    evt.preventDefault();
    const fragment = new URI(evt.target.href).fragment();
    scrollTo(`#${fragment}`);
  }

  render () {
    const { target, text } = this.props;
    return (
      <li>
        <a href={`#${target}`} onClick={evt => this.handleClick(evt)}>{text}</a>
      </li>
    );
  }
}

export class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          {this.props.children}
        </ul>
      </nav>
    );
  }
}

export class HomeNav extends Component {
  render() {
    return (
      <Nav>
        <NavItem target="docs-intro" text="Getting Started" />
        <NavItem target="project-intro" text="Tasks by Project" />
        <NavItem target="skill-intro" text="Tasks by Skill" />
      </Nav>
    );
  }
}

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>
          <Link to="/">Firefox Test Pilot</Link>
        </h1>
        {this.props.children}
      </header>
    );
  }
}
