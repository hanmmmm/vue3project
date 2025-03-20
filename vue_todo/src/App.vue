<template>
  <div>
    <main-header></main-header>
    <main-todo></main-todo>
    <main-footer></main-footer>
  </div>
</template>

<script>
import "./assets/css/global.styl";
import mainHeader from "./components/mainHeader.vue";
import mainTodo from "./components/MainTodo/MainTodo.vue";
import mainFooter from "./components/mainFooter.vue";
export default {
  name: "App",
  components: {
    // 组件名 组件对象
    mainHeader: mainHeader,
    mainTodo: mainTodo,
    mainFooter: mainFooter,
  },
};
</script>

<style lang="stylus" scoped>
// li
//   color:red
</style>
