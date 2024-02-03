<template>
  <div class="max-width-container">
    <div>
      <h2>Add new Task</h2>
      <AddTaskForm />
    </div>

    <div>
      <h2>
        Your open Tasks <span>({{ uncompletedTasks.length }})</span>
      </h2>
      <Searchbar />
      <TaskContainer :tasks="uncompletedTasks" />
    </div>
  </div>
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
section {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 3rem;
}
</style>
