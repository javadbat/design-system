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
      'jb-input': path.resolve(__dirname, '..','..', '..', 'web-component','jb-input', 'dist', 'JBInput.js')
    }
  }
  return config;
};