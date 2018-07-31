const webpack = require('webpack');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  entry: {
    main: "./src/assets/scripts/main.js"
  },
  output: {
    filename: "[name].bundle.js"
  },
  plugins: [
    new uglifyJsPlugin({
      sourceMap: true
    })
  ]
};

module.exports = config;
