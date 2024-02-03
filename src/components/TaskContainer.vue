<template>
  <section class="max-width-container">
    <h2 v-if="completed">
      Your completed Tasks <span>({{ tasks.length }})</span>
    </h2>
    <h2 v-else>
      Your open Tasks <span>({{ tasks.length }})</span>
    </h2>

    <input
      type="text"
      placeholder="Search for a task..."
      v-model="taskStore.searchValue"
    />

    <div class="task-container" v-if="tasks.length">
      <TaskComponent v-for="task in tasks" :key="task.id" :task="task" />
    </div>

    <div v-else>
      <p>No tasks available</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Task } from "@/types/task";
import TaskComponent from "@/components/Task.vue";
import { useTaskStore } from "@/stores/TaskStore";
import { defineProps } from "vue";

const taskStore = useTaskStore();

const props = defineProps<{
  tasks: Task[];
  completed: boolean;
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
