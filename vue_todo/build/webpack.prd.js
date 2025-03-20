// 导入公共模块 模块
const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')

const prdConfig= {
  // 设置mode
  mode:'production',//production，开发时可以设置为development模式，重新运行npm run build,生成的bundle.js就会很有条理
}

module.exports = merge(baseConfig,prdConfig)