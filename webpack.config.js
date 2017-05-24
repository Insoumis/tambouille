const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: config.development.basename,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
            importLoaders: 1,
          },
        }, 'sass-loader'],
      }, {
        test: /\.s?css$/,
        include: /node_modules/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        }, 'sass-loader'],
      }, {
        test: /\.(jpe?g|gif|png|svg|eot|woff|ttf)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // To get React production build
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.NamedModulesPlugin(),
  ],
};
