import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import myTheme from './my-theme.ts';
addons.setConfig({
  theme: myTheme,
});