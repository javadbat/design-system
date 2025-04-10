const packagesRoot = '../../../web-component'
module.exports = {
  // "stories": ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-interactions',
    "@storybook/addon-actions",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-webpack5-compiler-swc",
    "@chromatic-com/storybook",
    //to add rtl,ltr switch support
    "@storybook/addon-themes"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)', packagesRoot + '/**/*.stories.@(js|jsx|mjs|ts|tsx)', packagesRoot + '/**/*.mdx'],
  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  docs: {},
  staticDirs: ['../public'],
};