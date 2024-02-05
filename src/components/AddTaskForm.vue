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
    <button type="submit">Add</button>
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

form {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}
.input-wrapper {
  flex-grow: 1;
}

button {
  color: var(--white);
  background-color: var(--red);
  font-size: 1.25rem;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 4px;
  transition: all 0.1s ease-in-out;
}

@media (hover: hover) {
  button:hover {
    cursor: pointer;
  }
}

button:active {
  transform: scale(0.95);
}

@media (min-width: 640px) {
  form {
    flex-direction: row;
    align-items: flex-end;
    gap: 0.75rem;
  }

  button {
    padding: 0.2rem 1rem;
  }
}
</style>
