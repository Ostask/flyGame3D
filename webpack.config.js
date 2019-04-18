const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new htmlWebpackPlugin({
        template: 'index.html'
    })
  ],
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: [
            'style-loader',
            'css-loader'
            ]
        },
        {
            test: /\.styl$/,
            use: [
            'style-loader',
            'css-loader',
            'stylus-loader'
            ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
              limit: 100000,
              outputPath: 'images/'
          }
        },
        {
          test: /\.(htm|html)$/,
          use: 'html-withimg-loader'
        }
    ]
  }
};