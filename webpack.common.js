const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
        template: 'index.html'
    })
  ],
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
              outputPath: 'img/'
          }
        },
        {
          test: /\.BMP$/,
          use: [{
            loader: 'file-loader?name=img/[name].[ext]' //打包后在img目录下
          }]
        },
        {
            test: /\.dae$/,
            use: [{
              loader: 'file-loader?name=models/[name]/[name].[ext]' //打包后在img目录下
            }]
          },
        {
          test: /\.(htm|html)$/,
          use: 'html-withimg-loader'
        },
        {
          test: require.resolve("three/examples/js/controls/OrbitControls"),
          use: "imports-loader?THREE=three"
        },
        {
          test: require.resolve("three/examples/js/controls/OrbitControls"),
          use: "exports-loader?THREE.OrbitControls"
        },
        {
            test: require.resolve("three/examples/js/loaders/ColladaLoader"),
            use: "imports-loader?THREE=three"
        },
        {
            test: require.resolve("three/examples/js/loaders/ColladaLoader"),
            use: "exports-loader?THREE.ColladaLoader"
        }
    ]
  }
};