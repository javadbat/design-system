import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../docs/**/*.mdx",
    "../modules/**/*.mdx",
    "../modules/**/*.stories.@(js|jsx|mjs|ts|tsx)"
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
    // react-docgen-typescript requires the TypeScript 5/6 compiler API.
    reactDocgen: "react-docgen",
  },
};
export default config;
