<script setup lang="ts">
import { Transition, watch, ref } from "vue";
import { useRoute, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

const route = useRoute();
const transitionName = ref("");

watch(
  () => route.path,
  (to, from) => {
    transitionName.value =
      to === "/archive" && from === "/" ? "slide-left" : "slide-right";
    console.log(transitionName.value);
  }
);

// maybe fetch here and save in pinia store
</script>

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

<style scoped>
/* Slide and fade in from right */
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
