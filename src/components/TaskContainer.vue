<template>
  <div class="task-container" v-if="tasks.length">
    <TaskComponent v-for="task in tasks" :key="task.id" :task="task" />
  </div>

  <div v-else>
    <p>No tasks available</p>
  </div>
</template>

<script setup lang="ts">
import type { TTask } from "@/types/task";
import TaskComponent from "@/components/Task.vue";
import { useTaskStore } from "@/stores/TaskStore";

const taskStore = useTaskStore();

const props = defineProps<{
  tasks: TTask[];
}>();
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
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-block: 2rem;
}

@media (min-width: 640px) {
  .task-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .task-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1200px) {
  .task-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
