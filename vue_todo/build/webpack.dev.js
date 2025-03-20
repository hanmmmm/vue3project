// 导入公共模块 模块
const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')

// 引入webpack插件
const webpack = require('webpack')
const devConfig = {
  // 设置mode
  mode:'development',//production，开发时可以设置为development模式，重新运行npm run build,生成的bundle.js就会很有条理
// devtool的选项可以参考文档， SourceMap源代码映射，主要作用是建立打包后的文件和源代码所在行的映射，在开发时快速定位到出错的源代码行
  devtool:'eval',
  // devServer 实时监听代码变化，帮助我们重新打包 刷新浏览器
  devServer:{
    // 指定服务器根目录
    static:'./dist',
    // 编译结束后自动打开浏览器
    open:true,
    hot:true, // 启用热模块替换
  },


  // 插件
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],

}

module.exports = merge(baseConfig,devConfig)