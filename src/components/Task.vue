<template>
  <div class="card" :class="{ completed: props.task.completed }">
    <input type="checkbox" v-model="status" />
    <p>{{ props.task.title }}</p>

    <!-- <p v-if="!edit">{{ task.title }}</p> -->
    <!-- <input v-else type="text" v-model="task.title" /> -->

    <!-- <button class="delete-button">X</button> -->
    <!-- <button class="edit-button" @click="toggleEditMode">O</button> -->
  </div>
</template>

<script setup lang="ts">
import type { Task } from "@/types/task";
import { useTaskStore } from "@/stores/TaskStore";
import { defineProps, computed } from "vue";

const taskStore = useTaskStore();

const props = defineProps<{
  task: Task;
}>();

const status = computed({
  get: () => props.task.completed,
  set: () => taskStore.changeTaskStatus(props.task.id),
});

// const toggleEditMode = () => {
//   edit.value = !edit.value;
// };
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
