import { addons } from 'storybook/manager-api';
import myTheme from './my-theme.ts';
addons.setConfig({
  theme: myTheme,
});
