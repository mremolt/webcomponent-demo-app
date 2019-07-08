const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  context: process.cwd(),
  mode: 'development',
  cache: true,
  devtool: 'inline-source-map',

  entry: {
    app: './src/main.ts',
  },

  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new CleanWebpackPlugin(),
    new WebpackNotifierPlugin({
      title: 'Webpack build',
      excludeWarnings: true,
    }),
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      useTypescriptIncrementalApi: true,
    }),
    new ForkTsCheckerNotifierWebpackPlugin({
      title: 'TypeScript',
      excludeWarnings: false,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: true },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    mainFields: ['es2015', 'module', 'browser', 'main'],
  },

  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
};
