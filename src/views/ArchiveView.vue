<template>
  <div class="max-width-container">
    <h2>
      Your completed Tasks <span>({{ completedTasks.length }})</span>
    </h2>
    <Searchbar />
    <TaskContainer :tasks="completedTasks" />
  </div>
</template>

<script setup lang="ts">
import Searchbar from "@/components/Searchbar.vue";
import TaskContainer from "@/components/TaskContainer.vue";
import { useTaskStore } from "@/stores/TaskStore";
import { computed } from "vue";

const taskStore = useTaskStore();
const completedTasks = computed(() => taskStore.getCompletedTasks);
</script>
