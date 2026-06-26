import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../**/*.mdx",
    "../**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "features": {
    experimentalReactComponentMeta: true,
  },
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    // reactDocgenTypescriptOptions: {
    //   compilerOptions:{}
    // },
  },
};
export default config;
