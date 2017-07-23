import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { wrapper } from '../../components/wrapper/decorator';
import Home from './index';

storiesOf('Home', module)
  .addDecorator(wrapper('blue'))
  .add('default', () => <Home />);
