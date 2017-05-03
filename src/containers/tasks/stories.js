import React from 'react';
import { storiesOf } from '@kadira/storybook';

import wrapper from '../../components/wrapper/decorator';
import Tasks from './index';

storiesOf('Tasks', module)
  .addDecorator(wrapper('blue'))
  .add('default', () => <Tasks />);
