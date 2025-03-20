<template>
  <header class="mianHeader">
    <h1>TodoList</h1>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      content: "",
    };
  },
  methood: {},
};
</script>

<style lang="stylus" scoped>
@import '~css/theme.styl';
.mainHeader{
  text-align:center
}
h1{
  text-align: center;
  font-size: 100px;
  color:#ccc;
  font-weight:100;
  text-shadow:5px 5px 5px #ccc;
  margin:20px;
}
li:nth-of-type(odd){
  color:red;
}
</style>
