const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    modules: [path.resolve(__dirname, './client/src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new htmlWebpackPlugin ({
      template: './client/public/index.html'
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