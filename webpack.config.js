const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, './VStructures.js'),
  ],

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'VStructures.js',
    library: 'VStructures',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: [
      '.js',
      '.json',
      '.vue'
    ],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  mode: process.env.NODE_ENV || 'production',

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: '>0.25%, not dead',
                  useBuiltIns: 'usage'
                }]
              ],
              plugins: [
                require('babel-plugin-transform-vue-jsx')
              ]
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test : /\.css$/,
        loader : [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        loader: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          iesafe: true,
          limit: 30 * 1024 // 30kB IE Limit
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.HashedModuleIdsPlugin(),
  ]
}
