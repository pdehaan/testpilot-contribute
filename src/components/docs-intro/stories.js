import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { wrapper } from '../wrapper/decorator';

import DocsIntro from './index';

storiesOf('DocsIntro', module)
  .addDecorator(wrapper('blue'))
  .add('default', () => <DocsIntro />);
