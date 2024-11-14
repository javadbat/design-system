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
    ],
    alias:{
      ...config.resolve.alias,
      react: path.resolve('node_modules/react'),
      'jb-button': path.resolve(__dirname, '..','..', '..', 'web-component','jb-button', 'dist', 'jb-button.js'),
      'jb-button-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-button', 'dist', 'JBButton.js'),
      'jb-loading': path.resolve(__dirname, '..','..', '..', 'web-component','jb-loading', 'dist', 'JBLoading.js'),
      'jb-pin-input': path.resolve(__dirname, '..','..', '..', 'web-component','jb-pin-input', 'dist', 'JBPinInput.js'),
      'jb-select': path.resolve(__dirname, '..','..', '..', 'web-component','jb-select', 'dist', 'jb-select.js'),
      'jb-select-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-select', 'index.js'),
      'jb-switch': path.resolve(__dirname, '..','..', '..', 'web-component','jb-switch', 'index.js'),
      'jb-switch-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-switch', 'index.js'),
      'jb-mobile-input-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-mobile-input', 'index.js'),
      'jb-national-input-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-national-input', 'index.js'),
      'jb-grid': path.resolve(__dirname, '..','..', '..', 'react-component','jb-grid', 'index.js'),
      'jb-calendar': path.resolve(__dirname, '..','..', '..', 'web-component','jb-calendar', 'dist', 'jb-calendar.js'),
      'jb-date-input': path.resolve(__dirname, '..','..', '..', 'web-component','jb-date-input', 'index.js'),
      'jb-time-input': path.resolve(__dirname, '..','..', '..', 'web-component','jb-time-input', 'dist', 'jb-time-input.js'),
      'jb-time-picker': path.resolve(__dirname, '..','..', '..', 'web-component','jb-time-picker', 'dist', 'jb-time-picker.js'),
      'jb-searchbar': path.resolve(__dirname, '..','..', '..', 'web-component','jb-searchbar', 'dist', 'jb-searchbar.js'),
      'jb-time-input-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-time-input', 'dist', 'JBTimeInput.js'),
      'jb-date-input-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-date-input', 'dist', 'JBDateInput.js'),
      'jb-pin-input-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-pin-input', 'dist', 'JBPinInput.js'),
      'jb-loading-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-loading', 'dist', 'JBLoading.js'),
      'jb-mobile-input':path.resolve(__dirname, '..','..', '..', 'web-component','jb-mobile-input', 'dist', 'jb-mobile-input.js'),
      'jb-national-input':path.resolve(__dirname, '..','..', '..', 'web-component','jb-national-input', 'dist', 'jb-national-input.js'),
      'jb-number-input':path.resolve(__dirname, '..','..', '..', 'web-component','jb-number-input', 'dist', 'jb-number-input.js'),
      'jb-number-input-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-number-input', 'dist', 'JBNumberInput.js'),
      'jb-payment-input-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-payment-input', 'dist', 'JBPaymentInput.js'),
      'jb-password-input':path.resolve(__dirname, '..','..', '..', 'web-component','jb-password-input','dist','jb-password-input.js'),
      'jb-password-input-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-password-input', 'dist', 'JBPasswordInput.js'),
      'jb-image-input-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-image-input', 'dist', 'JBImageInput.js'),
      'jb-modal':path.resolve(__dirname, '..','..', '..', 'web-component','jb-modal'),
      'jb-message':path.resolve(__dirname, '..','..', '..', 'modules','jb-message'),
      'jb-calendar-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-calendar', 'dist', 'JBCalendar.js'),
      'jb-textarea-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-textarea', 'dist', 'JBTextarea.js'),
      'jb-form':path.resolve(__dirname, '..','..', '..', 'web-component','jb-form','dist','jb-form.js'),
    }
  }
  return config;
};