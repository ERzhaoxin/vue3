<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo" />
      <Footer
        :todos="todos"
        :clearAllCompletedTodos="clearAllCompletedTodos"
      ></Footer>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, toRefs, watch, onMounted } from "vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import { Todo } from "./types/todo";
export default defineComponent({
  name: "APP",
  components: { Header, List, Footer },
  setup() {
    const state = reactive<{ todos: Todo[] }>({
      todos: [
        { id: 1, title: "奔驰", isCompleted: false },
        { id: 2, title: "宝马", isCompleted: false },
        { id: 3, title: "奥迪", isCompleted: false },
      ],
    });
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo);
    };
    const deleteTodo = (index: number) => {
      state.todos.splice(index, 1);
    };
    // 清理所有选中的数据
    const clearAllCompletedTodos = () => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    };
    const updateTodo = (todo: Todo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted;
    };

    return {
      ...toRefs(state),
      addTodo,
      deleteTodo,
      updateTodo,
      clearAllCompletedTodos,
    };
  },
});
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>