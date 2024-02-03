<template>
  <form @submit.prevent="handleSubmit()">
    <input
      type="text"
      placeholder="Enter a new task..."
      v-model="input"
      required
    />
    <button type="submit">+ ADD</button>
  </form>
</template>

<script setup lang="ts">
import { useTaskStore } from "@/stores/TaskStore";
import { ref } from "vue";

const taskStore = useTaskStore();
const input = ref("");

const handleSubmit = () => {
  taskStore.addTask(input.value);
  input.value = "";
};
</script>

<style scoped></style>
