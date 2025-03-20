// 导入path 模块
const path = require('path')

// 引入vue-loader插件
// const VueLoaderPlugin = require('vue-loader/lib/plugin') // 该引入方法会报错,换成下面这种
const { VueLoaderPlugin } = require('vue-loader')

// 引入html-webpack-plugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 引入clean-webpack-plugin插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 打包入口文件
  entry:'./src/main.js',
  // 打包出口文件
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'../dist')
  },
  // 配置打包规则
  module:{
    rules:[{
      test:/\.js$/,
      exclude:/node_module/,
      loader:"babel-loader"
    },{
      test:/\.vue$/,   //test 代表是正则表达式，匹配以vue结尾的文件
      loader:'vue-loader',// 遇到以vue结尾的文件，则使用vue-loader 完成打包
    },{
      test:/\.(jpg|jpeg|png|svg)$/,
      loader:'file-loader', // 也可以设为 'url-loader'
      options:{
        name:'[name].[ext]', //使用原文件名和后缀，重新打包会生成和原文件一样的名字
        limit:2048,// 当loader为 'url-loader'时，当图片小于指定值 单位byte，就会以base64方式直接打包到js上，而不会打包成一个文件,可以去bundle.js文件上查看是否存在
      }
    },{
      test: /\.css$/,
      use:['style-loader', 'css-loader'],//注意这里的书写顺序是有讲究的，按照从右到左，从下到上的顺序依次执行
                                        // css-loader的作用 是将多个css文件融合为一个css文件，
                                        // css-loader处理完后 交由style-loader处理
    },{
      test: /\.styl(us)?$/,  // /\.styl(us)?$/,
      use: ["style-loader", "css-loader", "postcss-loader","stylus-loader"],// 当遇到stylus结尾的文件时，先调用stylus-loader,就会生成css格式的文件，再交给css-loader去处理，css-loader就会形成一个统一的文件，再交给style-loader去处理
    }]
  },

  // 插件
  plugins:[
    new VueLoaderPlugin(), // 实例化插件对象
    new HtmlWebpackPlugin({ // html-webpack-plugin作用：再打包结束时，在dist目录下自动生成index.html,并把打包好的js文件引入到html中
      template:'./index.html'
    }),
    new CleanWebpackPlugin(),
  ],
  resolve:{
    alias:{
      'vue':'vue/dist/vue.runtime.esm-bundler.js',
      '@':path.resolve(__dirname,'../src'),
      'css':path.resolve(__dirname,'../src/assets/css'),
      'images':path.resolve(__dirname,'../src/assets/img')
    }
  },
}