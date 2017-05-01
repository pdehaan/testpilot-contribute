import React from 'react';
import { storiesOf } from '@kadira/storybook';

import wrapper from '../../components/wrapper/decorator';
import {
  WhatIsOpenSource,
  WhyContribute,
  NeedToKnow,
  GetStarted
} from './index';

storiesOf('DocsPage', module)
  .addDecorator(wrapper('blue'))
  .add('What is open source?', () => <WhatIsOpenSource />)
  .add('Why would I contribute?', () => <WhyContribute />)
  .add('What do I need to know?', () => <NeedToKnow />)
  .add('How do I get started?', () => <GetStarted />);
