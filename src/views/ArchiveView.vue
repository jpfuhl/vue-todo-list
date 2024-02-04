<template>
  <section class="max-width-container">
    <div class="search-task-wrapper">
      <h2>
        Your completed Tasks
        <span class="task-count">{{ completedTasks.length }}</span>
      </h2>
      <Searchbar />
    </div>

    <TaskContainer :tasks="completedTasks" />
  </section>
</template>

<script setup lang="ts">
import Searchbar from "@/components/Searchbar.vue";
import TaskContainer from "@/components/TaskContainer.vue";
import { useTaskStore } from "@/stores/TaskStore";
import { computed } from "vue";

const taskStore = useTaskStore();
const completedTasks = computed(() => taskStore.getCompletedTasks);
</script>

<style scoped>
@import "@/assets/view.css";
</style>
