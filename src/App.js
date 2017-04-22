import React, { Component } from 'react';

import Repo from './components/repo'

import config from './config.json';
import './App.css';

export default class App extends Component {

  render() {
    const { repos } = config;
    return (
      <div>
        <h1>Good First Bugs</h1>
        {repos.map(repo => <Repo {...repo}/>)}
      </div>
    );
  }
}
