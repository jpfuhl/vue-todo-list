<script setup lang="ts">
import { ref, onMounted } from "vue";

type Task = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const tasks = ref<Task[]>([]);

onMounted(() => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
      json.forEach((task: Task) => {
        if (tasks.value.length === 12) return;
        tasks.value.push(task);
      });
    });
});

const input = ref("");

const addTask = () => {
  const newTask: Task = {
    id: tasks.value.length + 1,
    userId: 1,
    title: input.value,
    completed: false,
  };
  tasks.value.push(newTask);
  input.value = "";
};
</script>

<template>
  <div>
    <section class="max-width-container">
      <h2>Add new Task</h2>
      <form @submit.prevent="addTask">
        <input type="text" placeholder="Enter a new task..." v-model="input" />
        <button type="submit">+ ADD</button>
      </form>
    </section>

    <section class="max-width-container">
      <h2>
        Your open Tasks <span>({{ tasks.length }})</span>
      </h2>
      <input type="text" placeholder="Search for a task..." />

      <div class="task-container" v-if="tasks.length">
        <div v-for="(task, index) in tasks" :key="task.id">
          <input type="checkbox" v-model="task.completed" />
          <p>{{ task.title }}</p>
        </div>
      </div>

      <div v-else>
        <p>No tasks available</p>
      </div>
    </section>
  </div>
</template>

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
