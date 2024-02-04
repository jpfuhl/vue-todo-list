<template>
  <div class="card" :class="{ completed: task.completed }">
    <input type="checkbox" v-model="status" />
    <p>{{ truncatedTitle }}</p>
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

const truncatedTitle = computed(() => {
  return props.task.title.length > 50
    ? props.task.title.slice(0, 47) + " ..."
    : props.task.title;
});
</script>

<style scoped>
.card {
  height: 100px;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-left: 2rem;
  padding-right: 1rem;
  border-radius: 12px;
  /* background: #0cebeb;
  background: -webkit-linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb);
  background: linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb); */
  background: #b2fefa;
  background: -webkit-linear-gradient(30deg, #8aecff, #b2fefa);
  background: linear-gradient(30deg, #8aecff, #b2fefa);
  /* box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1); */
  transition: all 0.2s ease-in-out;
}

.card:hover {
  scale: 1.02;
}

.card:active {
  scale: 0.99;
}

p {
  max-width: 70%;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
}

input[type="checkbox"] {
  width: 1.75rem;
  height: 1.75rem;
}

.completed {
  filter: grayscale(100%);
}
</style>
