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
    alias:{
      ...config.resolve.alias,
      react: path.resolve('node_modules/react'),
      'jb-button': path.resolve(__dirname, '..','..', '..', 'web-component','jb-button', 'dist', 'JBButton.js'),
      'jb-loading': path.resolve(__dirname, '..','..', '..', 'web-component','jb-loading', 'dist', 'JBLoading.js'),
      'jb-input': path.resolve(__dirname, '..','..', '..', 'web-component','jb-input', 'dist', 'JBInput.js'),
      'jb-pin-input': path.resolve(__dirname, '..','..', '..', 'web-component','jb-pin-input', 'dist', 'JBPinInput.js'),
      'jb-select': path.resolve(__dirname, '..','..', '..', 'web-component','jb-select', 'dist', 'JBSelect.js'),
      'jb-select-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-select', 'index.js'),
      'jb-switch': path.resolve(__dirname, '..','..', '..', 'web-component','jb-switch', 'index.js'),
      'jb-switch-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-switch', 'index.js'),
      'jb-mobile-input-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-mobile-input', 'index.js'),
      'jb-grid': path.resolve(__dirname, '..','..', '..', 'react-component','jb-grid', 'index.js'),
      'jb-calendar': path.resolve(__dirname, '..','..', '..', 'web-component','jb-calendar', 'dist', 'JBCalendar.js'),
      'jb-date-input': path.resolve(__dirname, '..','..', '..', 'web-component','jb-date-input', 'dist', 'JBDateInput.js'),
      'jb-time-input': path.resolve(__dirname, '..','..', '..', 'web-component','jb-time-input', 'dist', 'JBTimeInput.js'),
      'jb-time-picker': path.resolve(__dirname, '..','..', '..', 'web-component','jb-time-picker', 'dist', 'JBTimePicker.js'),
      'jb-searchbar': path.resolve(__dirname, '..','..', '..', 'web-component','jb-searchbar', 'dist', 'jb-searchbar.js'),
      'jb-time-input-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-time-input', 'dist', 'JBTimeInput.js'),
      'jb-date-input-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-date-input', 'dist', 'JBDateInput.js'),
      'jb-pin-input-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-pin-input', 'dist', 'JBPinInput.js'),
      'jb-loading-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-loading', 'dist', 'JBLoading.js'),
      'jb-mobile-input':path.resolve(__dirname, '..','..', '..', 'web-component','jb-mobile-input', 'dist', 'jb-mobile-input.js'),
      'jb-payment-input':path.resolve(__dirname, '..','..', '..', 'web-component','jb-payment-input'),
      'jb-modal':path.resolve(__dirname, '..','..', '..', 'web-component','jb-modal'),
    }
  }
  return config;
};