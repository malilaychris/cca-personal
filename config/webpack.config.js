const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': `http://${HOST}:${PORT}`
    }
  },
  resolve: {
    modules: [path.resolve(__dirname, './client/src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: './client/public/index.html',
      favicon: './client/public/favicon.ico'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: ['file-loader']
      }
    ]
  }
}