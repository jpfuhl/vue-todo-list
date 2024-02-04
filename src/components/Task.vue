<template>
  <div class="card" :class="{ completed: task.completed }">
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
  background: var(--teal);
  background: -webkit-linear-gradient(
    135deg,
    #a0f0f2 0%,
    #66d9d9 50%,
    var(--teal) 100%
  );
  background: linear-gradient(
    135deg,
    #dbf8f8 0%,
    #a8eeee 50%,
    var(--teal) 100%
  );
  transition: all 0.2s ease-in-out;
}

.card:hover {
  scale: 1.02;
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
  border: 2px solid var(--dark-grey);
  cursor: pointer;
  position: relative;
  border-radius: 8px;
}

input[type="checkbox"]:checked {
  background-color: var(--dark-grey);
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

.completed {
  filter: grayscale(100%);
}
</style>
