import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { repos } from '../../config.json';
import wrapper from '../wrapper/decorator';
import ProjectIntro, { ProjectIntroItem } from './index';

const itemStories = storiesOf('Project Intro Items', module).addDecorator(
  wrapper('blue')
);
repos.forEach(repo => {
  itemStories.add(repo.name, () => <ProjectIntroItem {...repo} />);
});

const stories = storiesOf('Project Intro', module)
  .addDecorator(wrapper('blue'))
  .add('default', () => <ProjectIntro repos={repos} />);
