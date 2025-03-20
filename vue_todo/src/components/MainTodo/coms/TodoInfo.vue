<template>
  <div class="todoInfo">
    <span class="tatal"> {{ total }} item left </span>
    <div>
      <a
        :class="['btn', 'primary', 'border', state == item ? 'active' : '']"
        v-for="(item, index) in states"
        @click="toggleState(item)"
        >{{ item }}
      </a>
    </div>
    <button type="" class="clear" @click="clearCompleted">clear completed</button>
  </div>
</template>
<script>
export default {
  name: "Todoinfo",
  props: {
    total: Number,
  },
  data() {
    return {
      states: ["all", "active", "completed"],
      state: "all",
    };
  },
  methods: {
    toggleState(state) {
      this.state = state;
      this.$emit("toggleState", state);
    },
    clearCompleted() {
      this.$emit("clearCompleted");
    },
  },
};
</script>
<style lang="stylus" scoped>
@import '~css/theme.styl'
@import '~css/mixins.styl'
.todoInfo{
  display:flex;
  flex-direction:row;
  font-weight:400;
  padding:5px 10px;
  line-height:30px;
  border-top:1px solid #eee
}
.total{
  color:$red
}
.tabs{
  display:flex;
  justify-content:space-between;
  width:200px;
}
.btn.primary.border{
  primaryBorderBtn()
}
.active{
  primaryBtn()
}
.clear{
  // padding:0 10px;
  // background-color:$green;
  // border-radius:5px;
  // color:#fff;
  // border:none;
  infoBtn()
}
</style>
