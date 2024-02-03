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

    <TaskContainer :tasks="uncompletedTasks" :completed="false" />

  </div>
</template>

<script setup lang="ts">
import TaskContainer from "@/components/TaskContainer.vue";
import { useTaskStore } from "@/stores/TaskStore";
import { ref, computed } from "vue";

const taskStore = useTaskStore();
const uncompletedTasks = computed(() => taskStore.getUncompletedTasks);

const input = ref("");

const handleSubmit = () => {
  taskStore.addTask(input.value);
  input.value = "";
};
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
