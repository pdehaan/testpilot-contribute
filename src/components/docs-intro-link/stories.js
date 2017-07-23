import React from 'react';
import { addDecorator, storiesOf } from '@kadira/storybook';

import { docs } from '../../config.json';
import { wrapper } from '../wrapper/decorator';

import DocsIntroLink from './index';

const stories = storiesOf('DocsIntroLink', module).addDecorator(wrapper());

docs.forEach(doc => {
  stories.add(doc.title, () => <DocsIntroLink {...doc} />);
});
