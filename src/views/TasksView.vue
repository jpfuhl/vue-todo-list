<template>
  <section class="max-width-container">
    <div class="add-task-wrapper">
      <h2>Add new Task</h2>
      <AddTaskForm />
    </div>

    <div class="search-task-wrapper">
      <h2>
        Your open Tasks
        <span class="task-count">{{ uncompletedTasks.length }}</span>
      </h2>
      <Searchbar />
    </div>

    <TaskContainer :tasks="uncompletedTasks" />
  </section>
</template>

<script setup lang="ts">
import AddTaskForm from "@/components/AddTaskForm.vue";
import Searchbar from "@/components/Searchbar.vue";
import TaskContainer from "@/components/TaskContainer.vue";
import { useTaskStore } from "@/stores/TaskStore";
import { computed } from "vue";

const taskStore = useTaskStore();
const uncompletedTasks = computed(() => taskStore.getUncompletedTasks);
</script>

<style scoped>
@import "@/assets/view.css";
</style>
