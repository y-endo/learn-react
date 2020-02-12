const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const mode = process.env.NODE_ENV !== 'production' ? 'development' : 'production';

module.exports = {
  mode: mode,
  devtool: mode === 'production' ? false : 'inline-source-map',
  entry: {
    './public/hello-world/assets/js/app': './src/hello-world/js/index.jsx',
    './public/react-router/assets/js/app': './src/react-router/js/index.jsx',
    './public/flux/assets/js/app': './src/flux/js/index.js',
    './public/hooks/assets/js/app': './src/hooks/js/index.js',
    './public/redux-thunk/assets/js/app': './src/redux-thunk/js/index.js',
    './public/react-transition-group/assets/js/app': './src/react-transition-group/js/index.js',
    './public/react-spring/assets/js/app': './src/react-spring/js/index.js'
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
