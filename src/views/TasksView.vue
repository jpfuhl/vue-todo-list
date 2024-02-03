<template>
  <div>
    <section class="max-width-container">
      <h2>Add new Task</h2>
      <form @submit.prevent="handleSubmit()">
        <input
          type="text"
          placeholder="Enter a new task..."
          v-model="input"
          required
        />
        <button type="submit">+ ADD</button>
      </form>
    </section>

    <section class="max-width-container">
      <h2>
        Your open Tasks <span>({{ uncompletedTasks.length }})</span>
      </h2>
      <input
        type="text"
        placeholder="Search for a task..."
        v-model="taskStore.searchValue"
      />

      <div class="task-container" v-if="uncompletedTasks.length">
        <TaskComponent
          v-for="task in uncompletedTasks"
          :key="task.id"
          :task="task"
          @changeTaskStatus="taskStore.changeTaskStatus(task.id)"
        />
      </div>

      <div v-else>
        <p>No tasks available</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import TaskComponent from "@/components/Task.vue";
import { useTaskStore } from "@/stores/TaskStore";
import { ref, computed } from "vue";

const taskStore = useTaskStore();
const uncompletedTasks = computed(() => taskStore.getUncompletedTasks);

const input = ref("");

const handleSubmit = () => {
  taskStore.addTask(input.value);
  input.value = "";
};

// const addTask = () => {
//   const newTask: Task = {
//     id: tasks.value.length + 1,
//     userId: 1,
//     title: input.value,
//     completed: false,
//   };
//   tasks.value.push(newTask);
//   input.value = "";
// };
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 3rem;
}

.task-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
</style>
