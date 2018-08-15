const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('vue-html-webpack-plugin')

module.exports = {
  entry: [
    './dev/entry.js',
    'webpack-hot-middleware/client?reload=true'
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './dev/public'),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      '@': __dirname
    },
    extensions: [
      '.vue', '.js', '.json'
    ]
  },
  devtool: 'eval-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        },
        exclude: (file) => (
            /node_modules/.test(file) &&
            !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(ttf|woff|png|jpg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            context: ''
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      vue: true
    })
  ]
}
