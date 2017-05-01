import { addDecorator, configure } from '@kadira/storybook';
import StoryRouter from 'storybook-router';

function loadStories() {
  [
    'button',
    'docs-intro',
    'docs-intro-link',
    'docs-navigation',
    'header',
    'intro',
    'issue',
    'issue-list',
    'label',
    'label-list',
    'repo',
    'repo-header'
  ].forEach(component => require(`../src/components/${component}/stories`));
  [
    'docs-page',
    'home'
  ].forEach(container => require(`../src/containers/${container}/stories`));
}
addDecorator(StoryRouter());
configure(loadStories, module);
