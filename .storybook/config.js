import { configure, addDecorator } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

addDecorator(StoryRouter());

function loadStories() {
  const spread = require.context('../src', true, /\_story\.js$/);
  spread.keys().forEach(filename => spread(filename));
}

configure(loadStories, module);
