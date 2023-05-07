import * as dotenv from 'dotenv';
import { resolve } from 'path';
import ESLintPlugin from 'eslint-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

import alias from './alias.json' assert { type: 'json' };

dotenv.config();

const { SOCKETS_ENABLE } = process.env;

const setAlias = (aliasList) => {
  return Object.entries(aliasList).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: resolve(process.cwd(), value)
    };
  }, {});
};

const config = {
  entry: './src/bootstrap.jsx',
  devtool: 'source-map',
  resolve: {
    alias: setAlias(alias),
    extensions: ['.js', '.jsx', '.json']
  },
  output: {
    filename: 'assets/js/[name].bundle.js',
    path: resolve(process.cwd(), 'dist'),
    publicPath: 'auto'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 1,
              sourceMap: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      exclude: 'node_modules'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      SOCKETS_ENABLE: SOCKETS_ENABLE === 'true'
    })
  ]
};

export default config;
