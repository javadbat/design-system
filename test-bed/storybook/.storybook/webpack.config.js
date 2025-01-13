const path = require('path');

module.exports = async ({ config }) => {
  // fonts
  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    type: 'asset/resource',
    generator: {
        filename: '[name][ext]',
    },
    // loader: 'file-loader',
    //     options: {
    //       name: '[name].[ext]',
    // },
    // include: path.resolve(__dirname, '../src/styles'),
  });
  config.resolve = {
    ...config.resolve,
    modules: [
      ...(config.resolve.modules || []),
      //move thing here if you want to import package as real package and not a single file put it here
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-payment-input'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-image-input'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-popover'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-textarea'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-calendar'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-input'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-form'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-number-input'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-mobile-input'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-time-input'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-national-input'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-password-input'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-date-input'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-button'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-select'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-file-input'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-loading'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-switch'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-pin-input'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-calendar'),
      path.resolve(__dirname, '..','..', '..', 'web-component','jb-checkbox'),
    ],
    alias:{
      ...config.resolve.alias,
      react: path.resolve('node_modules/react'),
      'jb-grid': path.resolve(__dirname, '..','..', '..', 'react-component','jb-grid', 'index.js'),
      'jb-time-picker': path.resolve(__dirname, '..','..', '..', 'web-component','jb-time-picker', 'dist', 'jb-time-picker.js'),
      'jb-searchbar': path.resolve(__dirname, '..','..', '..', 'web-component','jb-searchbar', 'dist', 'jb-searchbar.js'),
      'jb-modal':path.resolve(__dirname, '..','..', '..', 'web-component','jb-modal'),
      'jb-message':path.resolve(__dirname, '..','..', '..', 'modules','jb-message'),
    }
  }
  return config;
};