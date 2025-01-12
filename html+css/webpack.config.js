const path = require('path');
//const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { VueLoader } = require('vue-loader');
const vue = require('vue')
module.exports = {
  mode: 'development', // 或 'production'
  entry: './main.js', // 您的项目入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
};