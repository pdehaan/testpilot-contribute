import React from 'react';
import { storiesOf } from '@kadira/storybook';

import wrapper from '../wrapper/decorator';
import Header from './index';

storiesOf('Header', module)
  .addDecorator(wrapper('blue'))
  .add('default', () => <Header />);
