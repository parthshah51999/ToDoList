const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = () => {
  return {
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
    },
    plugins: [
     new HtmlWebpackPlugin({
       template: './src/index.template.html',
     }),
  ],
    resolve: {
      extensions: ['*', '.js', '.css'],
    },
    devtool: (() => {
      return 'cheap-module-eval-source-map'
    })(),
    module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
          },
        ],
      },
  };
};
