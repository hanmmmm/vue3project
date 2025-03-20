// 第一步 创建vue根实例，即安装vue, 使用命令npm install vue
 import Vue from 'vue'  // 这一步是从node_modules加载vue 对象

// 导入App组件
// import App from './App.vue'

// 第二步 创建vue根实例
// new Vue({
//   el:'#app',
//   components:{
//     // 组件名：组件对象
//     App:App
//   },
//   template:'<App/>'
// })
// // 挂载APP组件


// 创建一个vue应用
// 1. 导入createApp函数
// 2. 编写一个根组件App.vue，导入进来
// 3. 基于根组件创建应用实例
// 4. 挂载到index.html的#app容器
 
import {createApp} from 'vue'
import App from './App.vue'
const app = createApp(App)
app.mount('#app')


