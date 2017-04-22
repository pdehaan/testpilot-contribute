import React from 'react';
import { addDecorator, storiesOf } from '@kadira/storybook';

import { repos } from '../../config.json';
import applyWrapper from '../wrapper/decorator';
import RepoHeader from './index';

applyWrapper();

const props = (overrides = {}) => Object.assign({}, {
  "name": "Min Vid",
  "description": "Keep videos front and center. Min Vid lets you display YouTube and Vimeo videos in a small frame that stays in the foreground as you browse the web.",
  "url": "https://github.com/meandavejustice/min-vid",
  "colors": [
    "#FED66F",
    "#FD667B"
  ],
  "thumbnail": "min-vid.png"
}, overrides);

const stories = storiesOf('RepoHeader', module);
repos.forEach(repo => {
  stories.add(repo.name, () => <RepoHeader {...repo} />);
});
