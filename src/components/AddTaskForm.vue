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
    <button type="submit">+</button>
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
  color: white;
  background-color: blue;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 4px;
  transition: all 0.1s ease-in-out;
}

button:hover {
  cursor: pointer;
  /* box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2); */
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
