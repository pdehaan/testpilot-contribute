import React from 'react';
import { addDecorator } from '@kadira/storybook';

import Wrapper from './index';

const WrapperDecorator = (story) => (
  <Wrapper>
    {story()}
  </Wrapper>
);

export default () => {
  addDecorator(WrapperDecorator);
}
