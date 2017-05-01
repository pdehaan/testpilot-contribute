import React from 'react';
import { storiesOf } from '@kadira/storybook';

import wrapper from '../wrapper/decorator';
import DocsNavigation from './index';

storiesOf('DocsNavigation', module)
  .addDecorator(wrapper())
  .add('default', () => <DocsNavigation />);
