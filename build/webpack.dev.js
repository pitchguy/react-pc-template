const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const serverConfig = require('./webpack.server');
const theme = require('../antd-theme.js');
const WebpackBar = require('webpackbar');

module.exports = {
  mode: 'development',
  devtool: 'cheap-eval-source-map', //eval-source-map //此选项控制是否生成，以及如何生成 source map
  module: {
    //这些选项决定了如何处理项目中的不同类型的模块。
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/, //处理该文件时，排除的目录，建议使用include
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {},
        },
      },
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'less-loader?{modifyVars:' + JSON.stringify(theme) + '}'],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader', //上面的简写方式
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        use: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.(eot|woff|svg|ttf|woff2|gif|appcache|webp)(\?|$)/,
        use: 'file-loader?name=[name].[ext]',
      },
    ],
  },
  performance: {
    //打包性能配置
    hints: false, // 关闭性能提示
  },
  plugins: [
    new WebpackBar(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __PRODUCTION: JSON.stringify(true),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '.json'], //自动解析确定的扩展。覆盖原有扩展
    alias: {
      //创建 import 或 require 的别名，来确保模块引入变得更简单
      pages: path.resolve(__dirname, '../src/pages'),
      assets: path.resolve(__dirname, '../src/assets'),
      component: path.resolve(__dirname, '../src/components'),
      tpls: path.resolve(__dirname, '../src/tpls'),
      utils: path.resolve(__dirname, '../src/utils'),
      constants: path.resolve(__dirname, '../src/constants'),
    },
    modules: [
      path.resolve(__dirname, '../src'), //告诉 webpack 解析模块时应该搜索的目录。
      path.resolve(__dirname, '../node_modules'),
    ],
  },
  devServer: {
    disableHostCheck: true, //是否绕过主机检查
    contentBase: require('path').join(__dirname, 'dist'),
    compress: true, //服务都启用gzip 压缩：
    hot: true, //热更新
    open: true, //自动打开浏览器
    inline: true, //自动涮下模式，
    historyApiFallback: true, //h5 history api时任意的 404 响应都可能需要被替代为 index.html
    port: serverConfig.port,
    host: serverConfig.host,
    proxy: [
      {
        context: ['/auth', '/api'],
        target: 'http://localhost:3000',
      },
    ],
  },
};
