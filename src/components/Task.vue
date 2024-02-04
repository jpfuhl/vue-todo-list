<template>
  <div class="card">
    <input type="checkbox" v-model="status" />
    <p :title="isTruncated ? task.title : ''">
      {{ isTruncated ? truncatedTitle : task.title }}
    </p>
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

const isTruncated = computed(() => {
  return props.task.title.length > 67;
});

const truncatedTitle = computed(() => {
  return isTruncated.value ? props.task.title.slice(0, 64) + " ..." : "";
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
  border-radius: 8px;
  box-shadow: 0 4px 12px 0 rgba(234, 234, 234, 0.7);
  transition: all 0.2s ease-in-out;
}

.card:hover {
  scale: 1.02;
  box-shadow: 0 4px 14px 0 rgba(255, 46, 99, 0.7);
}

p {
  cursor: default;
  max-width: 70%;
  word-break: break-all;
}

input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 1.75rem;
  height: 1.75rem;
  border: 2px solid var(--grey);
  cursor: pointer;
  position: relative;
  border-radius: 8px;
}

input[type="checkbox"]:checked {
  border: 2px solid var(--red);
  background-color: var(--red);
}

input[type="checkbox"]:checked:after {
  content: "";
  position: absolute;
  width: 0.5rem;
  height: 1rem;
  border: 2px solid var(--white);
  border-width: 0 2px 2px 0;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
}
</style>
