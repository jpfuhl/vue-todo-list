<template>
  <Navbar />
  <main>
    <RouterView v-slot="{ Component }">
      <Transition :name="transitionName" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
  </main>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import { ref, watch, Transition } from "vue";
import { useRoute, RouterView } from "vue-router";
import { useTaskStore } from "@/stores/TaskStore";

const route = useRoute();
const transitionName = ref("");

// Changing transition based on route
watch(
  () => route.path,
  (to, from) => {
    transitionName.value =
      to === "/archive" && from === "/" ? "slide-left" : "slide-right";
    console.log(transitionName.value);
  }
);

// Initial fetch of n tasks from API
const taskStore = useTaskStore();
taskStore.fetchTasks(10);
</script>

<style scoped>
body {
  overflow-x: hidden;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(25%);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-25%);
}

.slide-left-enter-to,
.slide-left-leave-from,
.slide-right-enter-to,
.slide-right-leave-from {
  opacity: 1;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translate(-25%);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(25%);
}
</style>
