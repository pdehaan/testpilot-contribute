import { addDecorator, configure } from '@kadira/storybook';
import StoryRouter from 'storybook-router';

function loadStories() {
  ['home', 'docs-page', 'tasks'].forEach(container =>
    require(`../src/containers/${container}/stories`)
  );
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
}
addDecorator(StoryRouter());
configure(loadStories, module);
