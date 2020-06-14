const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'webpack_main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
