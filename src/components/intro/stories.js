import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { wrapper } from '../wrapper/decorator';

import Intro from './index';

storiesOf('Intro', module)
  .addDecorator(wrapper('blue'))
  .add('default', () => <Intro />);
