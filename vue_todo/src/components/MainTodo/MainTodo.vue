<template>
  <div class="main_todo">
    <input
      type="text"
      class="add_todo"
      placeholder="what to do?"
      autofocus
      v-model="content"
      @keyup.enter="addTodo"
    />
    <todo-item
      v-for="(item, index) in filterData"
      :key="index"
      :todo="item"
      @del="handleDeleteItem"
    ></todo-item>
    <todo-info
      :total="total"
      @toggleState="handleToggleState"
      @clearCompleted="handleClear"
    ></todo-info>
  </div>
</template>

<script>
import todoItem from "./coms/TodoItem.vue";
import todoInfo from "./coms/TodoInfo.vue";

let id = 0;

export default {
  name: "MainTodo",
  components: {
    // 组件名 组件对象
    todoItem: todoItem,
    todoInfo: todoInfo,
  },
  data() {
    return {
      todoData: [],
      content: "",
      total: "",
      filter: "all",
    };
  },
  methods: {
    addTodo() {
      if (this.content === "") return;
      this.todoData.unshift({
        id: id++,
        content: this.content,
        completed: false,
      });
      this.content = "";
    },
    handleDeleteItem(id) {
      this.todoData.splice(
        this.todoData.findIndex((item) => item.id === id),
        1
      );
    },
    handleToggleState(state) {
      this.filter = state;
    },
    handleClear() {
      this.todoData = this.todoData.filter((item) => item.completed == false);
    },
  },
  watch: {
    todoData: {
      deep: true,
      handler() {
        this.total = this.todoData.filter((item) => item.completed == false).length;
      },
    },
  },
  computed: {
    filterData() {
      switch (this.filter) {
        case "all":
          return this.todoData;
          break;
        case "active":
          return this.todoData.filter((item) => item.completed == false);
          break;
        case "completed":
          return this.todoData.filter((item) => item.completed == true);
          break;
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
.main_todo{
  margin:0 auto;
  width:600px;
  background:#fff;
  box-shadow:0 0 5px #666;
  .add_todo{
    width:100%;
    padding:16px 16px 16px 36px;
    box-sizing:border-box;
    border:none;
  }
}
</style>
