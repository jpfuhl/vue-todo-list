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
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}
</style>
