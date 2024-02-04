<template>
  <form @submit.prevent="handleSubmit()">
    <div class="input-wrapper">
      <input
        class="input-field"
        type="text"
        placeholder="Enter a new task..."
        v-model="input"
        required
      />
      <div class="input-line"></div>
    </div>
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

<style scoped>
@import "@/assets/input.css";
</style>
