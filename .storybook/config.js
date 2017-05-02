import { addDecorator, configure } from '@kadira/storybook';
import StoryRouter from 'storybook-router';

function loadStories() {
  [
    'button',
    'docs-intro',
    'docs-intro-link',
    'docs-navigation',
    'footer',
    'header',
    'intro',
    'issue',
    'issue-list',
    'label',
    'label-list',
    'project-intro',
    'skill-intro'
  ].forEach(component => require(`../src/components/${component}/stories`));
  ['docs-page', 'home'].forEach(container =>
    require(`../src/containers/${container}/stories`)
  );
}
addDecorator(StoryRouter());
configure(loadStories, module);
