<template>
  <input
    type="text"
    placeholder="Search for a task..."
    v-model="taskStore.searchValue"
  />
</template>

<script setup lang="ts">
import { useTaskStore } from "@/stores/TaskStore";

const taskStore = useTaskStore();
</script>

<style scoped></style>
