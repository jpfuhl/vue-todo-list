<template>
  <div class="card" :class="{ completed: task.completed }">
    <input type="checkbox" v-model="status" />
    <p>{{ task.title }}</p>
  </div>
</template>

<script setup lang="ts">
import type { TTask } from "@/types/task";
import { useTaskStore } from "@/stores/TaskStore";
import { computed } from "vue";

const taskStore = useTaskStore();

const props = defineProps<{
  task: TTask;
}>();

const status = computed({
  get: () => props.task.completed,
  set: () => taskStore.changeTaskStatus(props.task.id),
});
</script>

<style scoped>
.card {
  max-width: 400px;
  display: flex;
  gap: 2rem;
  margin-block: 2rem;
  padding: 1rem;
  border-radius: 12px;
  background: #0cebeb;
  background: -webkit-linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb);
  background: linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb);
}

.completed {
  filter: grayscale(100%);
}

/* .delete-button {
  position: relative;
  top: 0;
  right: 50;
  border: none;
  cursor: pointer;
} */
</style>
