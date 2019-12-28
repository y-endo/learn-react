const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const mode = process.env.NODE_ENV !== 'production' ? 'development' : 'production';

module.exports = {
  mode: mode,
  devtool: mode === 'production' ? false : 'inline-source-map',
  entry: {
    './public/01/assets/js/app': './src/01/js/index.jsx',
    './public/02/assets/js/app': './src/02/js/index.jsx',
    './public/03/assets/js/app': './src/03/js/index.js',
    './public/04/assets/js/app': './src/04/js/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './')
  },
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.jsx']
  },
  devServer: {
    open: false,
    contentBase: path.resolve(__dirname, './public'),
    watchContentBase: true,
    historyApiFallback: true,
    writeToDisk: true
  },
  optimization:
    mode === 'production'
      ? {
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                ecma: 6,
                compress: {
                  warnings: false,
                  drop_console: true
                }
              }
            })
          ]
        }
      : {}
};
