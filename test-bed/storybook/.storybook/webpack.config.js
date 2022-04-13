const path = require('path');

module.exports = async ({ config }) => {
  // fonts
  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    use: [
      {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'
        }
      }
    ],
    include: path.resolve(__dirname, '../src/styles'),
  });
  config.resolve = {
    ...config.resolve,
    alias:{
      ...config.resolve.alias,
      'jb-button': path.resolve(__dirname, '..','..', '..', 'web-component','jb-button', 'dist', 'JBButton.js'),
      'jb-input': path.resolve(__dirname, '..','..', '..', 'web-component','jb-input', 'dist', 'JBInput.js'),
      'jb-select': path.resolve(__dirname, '..','..', '..', 'web-component','jb-select', 'dist', 'JBSelect.js'),
      'jb-grid': path.resolve(__dirname, '..','..', '..', 'react-component','jb-grid', 'index.js'),
      'jb-calendar': path.resolve(__dirname, '..','..', '..', 'web-component','jb-calendar', 'dist', 'JBCalendar.js'),
      'jb-date-input': path.resolve(__dirname, '..','..', '..', 'web-component','jb-date-input', 'dist', 'JBDateInput.js'),
      'jb-time-input': path.resolve(__dirname, '..','..', '..', 'web-component','jb-time-input', 'dist', 'JBTimeInput.js'),
      'jb-time-picker': path.resolve(__dirname, '..','..', '..', 'web-component','jb-time-picker', 'dist', 'JBTimePicker.js'),
      'jb-searchbar': path.resolve(__dirname, '..','..', '..', 'web-component','jb-searchbar', 'dist', 'JBSearchbar.js'),
      'jb-time-input-react': path.resolve(__dirname, '..','..', '..', 'react-component','jb-time-input', 'dist', 'JBTimeInput.js'),
    }
  }
  return config;
};