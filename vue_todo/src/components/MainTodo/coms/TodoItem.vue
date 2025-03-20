<template>
  <div :class="['todo_item', todo.completed ? 'completed' : '']">
    <input type="checkbox" v-model="todo.completed" />
    <label>
      {{ todo.content }}
    </label>
    <button @click="delItem"></button>
  </div>
</template>

<script>
export default {
  name: "todoItem",
  props: {
    todo: Object,
  },
  methods: {
    delItem() {
      this.$emit("del", this.todo.id);
    },
  },
};
</script>
<style lang="stylus" scoped>
@import '~css/theme.styl'
@import '~css/mixins.styl'
.todo_item{
  display:flex;
  justify-content:space-between;
  padding:10px;
  font-size:24px;
  border-top:1px solid #ccc;

  input{
    width:50px;
    height:30px;
    // appearance:none;
    border:none;
    // &:after{
    //   content:url('~img/checked.png')
    // }
    // &:checked{
    // }
  }
  label{
    flex:1;
  }
  button{
    width:40px;
    background-color:transparent;
    cleanDefaultStyle()
  }
}
.todo_item:hover
  button:after
    content:'X';
    font-size:24px;
    color:$lightred;
.completed label{
    color:#999;
    text-decoration:line-through;
  }
</style>
