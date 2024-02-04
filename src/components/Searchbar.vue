<template>
  <div class="searchbar-wrapper">
    <div class="input-wrapper">
      <input
        class="input-field"
        type="text"
        placeholder="Search for a task..."
        v-model="taskStore.searchValue"
      />
      <div class="input-line"></div>
    </div>
    <font-awesome-icon icon="magnifying-glass" class="icon" />
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from "@/stores/TaskStore";

const taskStore = useTaskStore();
</script>

<style scoped>
@import "@/assets/input.css";

.searchbar-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.input-wrapper {
  /* flex-grow: 1; */
}

.icon {
  font-size: 1.75rem;
}
</style>
