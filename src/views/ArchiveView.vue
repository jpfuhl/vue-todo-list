<template>
  <TaskContainer :tasks="completedTasks" :completed="true" />
</template>

<script setup lang="ts">
import TaskContainer from "@/components/TaskContainer.vue";
import { useTaskStore } from "@/stores/TaskStore";
import { computed } from "vue";

const taskStore = useTaskStore();
const completedTasks = computed(() => taskStore.getCompletedTasks);
</script>
