<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll" />
    </label>
    <span
      ><span>已购买{{ count }}</span> /全部{{ todos.length }}
    </span>
    <button class="btn btn-danger" @click="clearAllCompletedTodos">
      清除已完成任务
    </button>
  </div>
</template>
<script>
import { defineComponent, ref, computed } from "vue";
export default defineComponent({
  name: "Footer",
  props: {
    todos: {
      type: Array,
      required: true, // 必须
    },
    clearAllCompletedTodos: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const count = computed(() => {
      return props.todos.reduce((pre, item) => {
        return pre + (item.isCompleted ? 1 : 0);
      }, 0);
    });
    return {
      count,
    };
  },
});
</script>
<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
