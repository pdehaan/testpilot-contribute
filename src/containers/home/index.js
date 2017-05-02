import React, { Component } from 'react';

import DocsIntro from '../../components/docs-intro';
import ProjectIntro from '../../components/project-intro';
import SkillIntro from '../../components/skill-intro';
import Intro from '../../components/intro';

import { repos, skills } from '../../config.json';
import './index.css';

export default class Home extends Component {
  render() {
    return (
      <section>
        <Intro />
        <DocsIntro />
        <ProjectIntro repos={repos} />
        <SkillIntro skills={skills} />
      </section>
    );
  }
}
