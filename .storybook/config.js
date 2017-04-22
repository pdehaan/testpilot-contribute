import { configure } from '@kadira/storybook';

function loadStories() {
  [
    'repo'
  ].forEach(component => require(`../src/components/${component}/stories`));
}

configure(loadStories, module);
