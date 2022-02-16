<template>
  <li
    @mouseenter="mouseHandler(true)"
    @mouseleave="mouseHandler(false)"
    :style="{ backgroundColor: bgColor, color: myColor }"
  >
    <label>
      <input type="checkbox" v-model="isCom" />
      <span>{{ todo.title }}</span>
    </label>
    <button
      class="btn btn-danger"
      v-show="isShow"
      style="display;none"
      @click="delTodo"
    >
      删除
    </button>
  </li>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { Todo } from "../types/todo";

export default defineComponent({
  name: "Item",
  props: {
    todo: {
      type: Object as () => Todo, // 函数返回的是Todo类型
      required: true,
    },
    deleteTodo: {
      type: Function,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    updateTodo: {
      type: Function,
      required: true,
    },
  },

  setup(props) {
    const bgColor = ref("white");
    const myColor = ref("black");
    const isShow = ref(false);
    // 鼠标进入和离开事件的回调函数
    const mouseHandler = (flag: boolean) => {
      if (flag) {
        // 鼠标进入
        bgColor.value = "pink";
        myColor.value = "white";
        isShow.value = true;
      } else {
        // 鼠标离开
        bgColor.value = "white";
        myColor.value = "black";
        isShow.value = false;
      }
    };
    // 删除数据的方法
    const delTodo = () => {
      props.deleteTodo(props.index);
    };
    const isCom = computed({
      get() {
        return props.todo.isCompleted;
      },
      set(val) {
        props.updateTodo(props.todo, val);
      },
    });
    return {
      mouseHandler,
      delTodo,
      isCom,
      bgColor,
      myColor,
      isShow,
    };
  },
});
</script>
<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
</style>
